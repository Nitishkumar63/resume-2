/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
	experimental: {
		serverActions: true,
	},
	async headers() {
		return [
			{
				source: "/api/mail",
				headers: [
					{ key: "Access-Control-Allow-Credentials", value: "false" },
					{ key: "Access-Control-Allow-Origin", value: "https://master--nitishkum.netlify.app" },
					{
						key: "Access-Control-Allow-Methods",
						value: "GET,DELETE,PATCH,POST,PUT",
					},
					{
						key: "Access-Control-Allow-Headers",
						value: "Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date",
					},
				],
			},
		];
	},
};


