package com.example.zuulgatewayserver.filters;

import java.util.logging.Logger;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;

@Component
public class RouterFilter extends ZuulFilter {

	private static final Logger LOGGER = Logger.getLogger(RouterFilter.class.getName());

	@Override
	public String filterType() {
		return "pre";
	}

	@Override
	public int filterOrder() {
		return 1;
	}

	@Override
	public boolean shouldFilter() {
		return true;
	}

	@Override
	public Object run() {
		RequestContext ctx = RequestContext.getCurrentContext();
		HttpServletRequest request = ctx.getRequest();

		LOGGER.info("PreFilter 2: "
				+ String.format("%s request to %s", request.getMethod(), request.getRequestURL().toString()));

		return null;
	}
}
