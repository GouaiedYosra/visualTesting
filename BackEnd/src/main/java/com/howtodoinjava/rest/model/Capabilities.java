package com.howtodoinjava.rest.model;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
@Component
public class Capabilities 
{

	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public int getW() {
		return w;
	}
	public void setW(int w) {
		this.w = w;
	}
	public int getH() {
		return h;
	}
	public void setH(int h) {
		this.h = h;
	}
	
	public boolean isOp() {
		return op;
	}
	public void setOp(boolean op) {
		this.op = op;
	}
	public boolean isCh() {
		return ch;
	}
	public void setCh(boolean ch) {
		this.ch = ch;
	}
	public boolean isFire() {
		return fire;
	}
	public void setFire(boolean fire) {
		this.fire = fire;
	}
	public boolean isIe() {
		return ie;
	}
	public void setIe(boolean ie) {
		this.ie = ie;
	}
	public boolean isEdge() {
		return edge;
	}
	public void setEdge(boolean edge) {
		this.edge = edge;
	}
	   @Value("${caps.op}")
		private boolean op;
    @Value("${caps.ch}")
	private boolean ch;
    @Value("${caps.fire}")
	private boolean fire;
    @Value("${caps.ie}")
	private boolean ie;
    @Value("${caps.edge}")
	private boolean edge;
    @Value("${caps.url}")
    private String url;
    @Value("${caps.w}")
    private int w;
    @Value("${caps.h}")
    private int h;
}
