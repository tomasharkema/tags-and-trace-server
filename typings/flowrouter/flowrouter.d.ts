declare var FlowRouter: FlowRouterStatic;

interface FlowRouterStatic {
    go(url: string);
    route(pattern: string, options: any);
    group(options: any);
    current(): FlowRouter;
}

interface FlowRouterParams {
    incidentId: string;
}

interface FlowRouter {
    params: FlowRouterParams;
}