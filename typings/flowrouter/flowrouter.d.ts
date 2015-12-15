declare var FlowRouter: FlowRouterStatic;

interface FlowRouterStatic {
    go(url: string);
    route(pattern: string, options: any);
    group(options: any);
    current(): FlowRouter;
}

interface FlowRouterParams {
    incidentId: string;
    workflowId: string;
}

interface FlowRouter {
    params: FlowRouterParams;
}