
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

			<div className="container mx-auto px-4 py-12 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
					{/* Company Info */}
					<div className="md:col-span-2 space-y-6">
						<div className="flex items-center space-x-3">
							<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
								<span className="text-white font-bold text-lg">DMA</span>
							</div>
							<div>
								<h3 className="font-bold text-xl text-white">DerMobileAufbereiter</h3>
								<p className="text-blue-300 text-sm">Professionelle Autoaufbereitung</p>
							</div>
						</div>
						<p className="text-gray-300 text-base leading-relaxed max-w-md">
							Erleben Sie erstklassige Autoaufbereitung direkt vor Ihrer Tür.
							Wir bringen Ihr Fahrzeug zum Glänzen - mit Leidenschaft und Präzision.
						</p>

						{/* Contact Info */}
						<div className="space-y-3">
							<div className="flex items-center space-x-3 text-gray-300">
								<Phone className="w-5 h-5 text-blue-400" />
								<span>+49 176 43190053</span>
							</div>
							<div className="flex items-center space-x-3 text-gray-300">
								<Mail className="w-5 h-5 text-blue-400" />
								<span>dermobileaufbereiter@gmail.com</span>
							</div>
							<div className="flex items-center space-x-3 text-gray-300">
								<MapPin className="w-5 h-5 text-blue-400" />
								<span>Mobiler Service in Memmingen Deutschland</span>
							</div>
						</div>
					</div>

					{/* Services */}
					<div className="space-y-6">
						<h3 className="font-bold text-lg text-white border-b border-blue-500/30 pb-2">Unsere Services</h3>
						<ul className="space-y-3">
							<li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group">
								<span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-blue-300 transition-colors"></span>
								<span>Innenaufbereitung</span>
							</a></li>
							<li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group">
								<span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-blue-300 transition-colors"></span>
								<span>Außenaufbereitung</span>
							</a></li>
							<li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group">
								<span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-blue-300 transition-colors"></span>
								<span>Komplett-Service</span>
							</a></li>
							<li><a href="#preise" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group">
								<span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-blue-300 transition-colors"></span>
								<span>Preisliste</span>
							</a></li>
						</ul>
					</div>

					{/* Social Media */}
					<div className="space-y-6">
						<h3 className="font-bold text-lg text-white border-b border-blue-500/30 pb-2">Folgen Sie uns</h3>
						<div className="flex space-x-4">
							<a href="https://www.facebook.com/profile.php?id=61559232703025" target="_blank" className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 group">
								<Facebook className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
							</a>
							<a href="https://www.instagram.com/dermobileaufbereiter" target="_blank" className="w-10 h-10 bg-pink-600/20 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-200 group">
								<Instagram className="w-5 h-5 text-pink-400 group-hover:text-white transition-colors" />
							</a>
						</div>
						<div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-4 border border-blue-500/20">
							<p className="text-sm text-gray-300 mb-2">📱 Folgen Sie uns für:</p>
							<ul className="text-xs text-gray-400 space-y-1">
								<li>• Vorher-Nachher Bilder</li>
								<li>• Pflegetipps</li>
								<li>• Sonderangebote</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-700 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<p className="text-gray-400 text-sm">
							© {year} DerMobileAufbereiter. Alle Rechte vorbehalten.
						</p>
						<div className="flex space-x-6 text-sm">
							<a href="/datenschutz" className="text-gray-400 hover:text-blue-400 transition-colors">Datenschutz</a>
							<a href="/impressum" className="text-gray-400 hover:text-blue-400 transition-colors">Impressum</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
