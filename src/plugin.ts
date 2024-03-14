export interface PluginAssets {
    css?: string[];
    js?: string[];
}

export interface Plugin {
    name: string;
    type: string;
    version?: string;
    instance?: any;
    attributes?: string[] | undefined;
    init?: Function;
    destroy?: Function;
    build?: Function;
    match?: Function;
    cssStyle?: Function;
    assets?: Function;
}

export interface SlideParams {
    node?: Element | null;
    url: string;
    thumbnail?: string;
    title?: string;
    description?: string;
    html?: boolean;
    [key: string]: any;
}

export interface BuildParams {
    index: number;
    slide: HTMLElement;
    config: SlideParams;
}

export default abstract class GLightboxPlugin implements Plugin {
    /** Name of the plugin */
    abstract name: string;

    /** Plugin type */
    abstract type: string;

    /** Version of this plugin. Currently not in use, defined here for backward compatibility. */
    version?: string;

    /** GLightbox instance */
    instance?: any;

    /** Custom data attributes used by your plugin */
    attributes?: string[];

    /**
     * This method is called when the lightbox is opened
     * use this method to set event listeners or init custom code
     */
    init(): void { }

    /**
     * This method is called when the lightbox is closed
     * use this method to remove event listeners and cleanup
     */
    destroy(): void { }

    /**
     * This method is used to check if the module should
     * handle the given url
    */
    match(url: string): boolean {
        return false;
    }

    /**
     * This method is called by GLightbox
     * to create the slide content
     * only used if the plugin type is slide
    */
    build({ index, slide, config }: BuildParams): Promise<boolean> {
        return Promise.resolve(false);
    }

    /**
     * Use this method to define CSS
     * it will be injected and removed automatically
     * only when needed
    */
    cssStyle(): string {
        return '';
    }

    /**
     * Use this method to define assets useful in case
     * your plugins needs to insert a Javascript library
     * or a CSS file
    */
    assets(): PluginAssets {
        return {};
    }
}