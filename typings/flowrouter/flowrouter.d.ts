declare var FlowRouter: FlowRouterStatic;

interface FlowRouterStatic {
    go(url: string);
}


/*
 declare var Template: TemplateStatic;
 interface TemplateStatic {
 new(): Template;
 // It should be [templateName: string]: TemplateInstance but this is not possible -- user will need to cast to TemplateInstance
 [templateName: string]: any | Template; // added "any" to make it work
 head: Template;
 find(selector:string):Blaze.Template;
 findAll(selector:string):Blaze.Template[];
 $:any;
 body: Template;
 currentData(): {};
 instance(): Blaze.TemplateInstance;
 parentData(numLevels?: number): {};
 registerHelper(name: string, helperFunction: Function): void;
 }
 */