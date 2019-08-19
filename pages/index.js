import React from 'react';
import fetch from 'isomorphic-unfetch';

export default class Page extends React.Component {
	static async getInitialProps({ req }) {
		let protocol = 'https';
		if (req.headers.host.indexOf('localhost') > -1) protocol = 'http';
		if (req.headers.host.indexOf('127.0.0.1') > -1) protocol = 'http';

		const res = await fetch(`${protocol}://${req.headers.host}/api`);
		const data = await res.json();
		return data;
	}
	render() {
		return (
			<pre>
				{`Info
hostname: ${this.props.hostname}
arch:     ${this.props.arch}
platform: ${this.props.platform}
uptime:   ${this.props.uptime}
`}
			</pre>
		);
	}
}
