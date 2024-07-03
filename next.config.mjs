/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol:'https',
				hostname: 'disk.yandex.ru',
				port: '',
				pathname: '/i/**'
			},
		]
	}
};

export default nextConfig;