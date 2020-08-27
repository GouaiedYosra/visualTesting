package com.howtodoinjava.rest.model;

public class CrossBrowserResult {
	private int chrome;
	private int firefox;
	private int edge;
	private int opera;
	private String url;
	private String resolution;
	private int ExecutionTime;
	private String startedAt;
	private String finishedAt;
	public int getChrome() {
		return chrome;
	}
	public  CrossBrowserResult() {
	}
	@Override
	public String toString() {
		return "CrossBrowserResult [chrome=" + chrome + ", firefox=" + firefox + ", edge=" + edge + ", opera=" + opera
				+ ", url=" + url + ", resolution=" + resolution + ", ExecutionTime=" + ExecutionTime + ", startedAt="
				+ startedAt + ", finishedAt=" + finishedAt + "]";
	}
	public CrossBrowserResult(int chrome, int firefox, int edge, int opera, String url, String resolution,
			int executionTime, String startedAt, String finishedAt) {
		super();
		this.chrome = chrome;
		this.firefox = firefox;
		this.edge = edge;
		this.opera = opera;
		this.url = url;
		this.resolution = resolution;
		ExecutionTime = executionTime;
		this.startedAt = startedAt;
		this.finishedAt = finishedAt;
	}
	public void setChrome(int chrome) {
		this.chrome = chrome;
	}
	public int getFirefox() {
		return firefox;
	}
	public void setFirefox(int firefox) {
		this.firefox = firefox;
	}
	public int getEdge() {
		return edge;
	}
	public void setEdge(int edge) {
		this.edge = edge;
	}
	public int getOpera() {
		return opera;
	}
	public void setOpera(int opera) {
		this.opera = opera;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getResolution() {
		return resolution;
	}
	public void setResolution(String resolution) {
		this.resolution = resolution;
	}
	public int getExecutionTime() {
		return ExecutionTime;
	}
	public void setExecutionTime(int executionTime) {
		ExecutionTime = executionTime;
	}
	public String getStartedAt() {
		return startedAt;
	}
	public void setStartedAt(String startedAt) {
		this.startedAt = startedAt;
	}
	public String getFinishedAt() {
		return finishedAt;
	}
	public void setFinishedAt(String finishedAt) {
		this.finishedAt = finishedAt;
	}

}
