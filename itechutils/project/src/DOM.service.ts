import { Injectable, Input, RendererFactory2, Renderer2, NgZone } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
	providedIn: 'root'
})
export class DOMService {
	private observer?: MutationObserver;
	private _enableTabsSelector: string;
	
	private boundElements = new WeakSet<HTMLTextAreaElement>();
	
	private renderer: Renderer2;
	
	@Input()
	set enableTabsSelector(value: string) {
		this._enableTabsSelector = value;
	}
	
	get enableTabsSelector(): string {
		return this._enableTabsSelector;
	}

    constructor(private rendererFactory: RendererFactory2, private meta: Meta, private zone: NgZone) {
		this.renderer = rendererFactory.createRenderer(null, null);
		this.initObserverWhenReady();
    }
    
    private initObserverWhenReady() {
		this.zone.runOutsideAngular(() => {
			const start = () => {
				const container = document.documentElement || document.body;
				if (!container) {
					requestAnimationFrame(start);
					return;
				}
				this.startObserver(container);
			};
			start();
		});
	}
	
	private startObserver(container: HTMLElement) {
		this.observer = new MutationObserver((mutations) => {
			if (!this.enableTabsSelector) {
				return;
			}
			
			let run = false;
			for (const m of mutations) {
				if (m.type === 'attributes' && 
						m.attributeName === 'class' &&
						(m.target as HTMLElement).classList.contains(this.enableTabsSelector)) {
					run = true;
					break;
				}
			}
			
			if (run) {
				this.zone.run(() => this.enableTabsFn());
			}
		});
		this.observer.observe(container, {
			attributes: true,
			subtree: true
		});
	}
	
	private enableTabsFn(): void {
		const textareas = document.getElementsByClassName(this.enableTabsSelector) as HTMLCollectionOf<HTMLTextAreaElement>;
		for (let i = 0; i < textareas.length; i++) {
			const el = textareas[i];
			if (this.boundElements.has(el)) {
				continue;
			}
			this.boundElements.add(el);
			
			el.addEventListener('keydown', (e: KeyboardEvent) => {
				if (e.key !== 'Tab') {
					return;
				}
				e.preventDefault();
				
				const start = el.selectionStart ?? 0,
					end = el.selectionEnd ?? 0;
				el.value = `${el.value.substring(0, start)}\t${el.value.substring(end)}`;
				el.selectionStart = el.selectionEnd = start + 1;
				
				el.dispatchEvent(new Event('input', { bubbles: true }));
			});
		}
	}

    setViewport(content: string) {
		const viewportTag = this.meta.getTag('name="viewport"');
		if (viewportTag) {
			this.meta.updateTag({
				name: 'viewport',
				content
			});
		} else {
			this.meta.addTag({
				name: 'viewport',
				content
			});
		}
	}
	
	autoSetViewport() {
		const minWidth = 420;
		let width = screen.width,
			scale = 1.0,
			requestedWidth = 'device-width';
		if (width < minWidth) {
			requestedWidth = minWidth.toString(10);
			scale = 0.9;
		}
		
		let content = `width=${requestedWidth}, initial-scale=${scale}, maximum-scale=${scale}, user-scalable=no`;
		this.setViewport(content);
	}
	
	setVisibility(elementSelector: string, visible: boolean) {
		const element = document.querySelector(elementSelector);
		if (!element) {
			return;
		}
		
		if (visible) {
			this.renderer.removeClass(element, "hidden");
		} else {
			this.renderer.addClass(element, "hidden");
		}
	}
	
	togglClass(elementSelector: string, className: string) {
		
	}
	
	getOuterHeight(elementSelector: string) {
		const element = document.querySelector(elementSelector) as HTMLElement | null;
		return element?.offsetHeight ?? 0;
	}
	
	setTitle(title: string) {
		document.title = title;
	}
	
	enableTabs(selector: string) {
		this.enableTabsSelector = selector;
	}
} 