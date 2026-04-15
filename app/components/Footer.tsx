import { Phone, Mail, MapPin, Globe, Share2, Link, ExternalLink } from "lucide-react";

const footerLinks = {
  Equipment: ["Excavators", "Bulldozers", "Cranes", "Forklifts", "Aerial Lifts", "Compactors"],
  Company: ["About Us", "Our Team", "Careers", "Press", "Blog", "Partners"],
  Support: ["Help Center", "Contact Us", "Request Quote", "Track Order", "Returns", "Safety Guidelines"],
};

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0a1628] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-sm flex items-center justify-center text-[#0a1628] font-bold text-xs">SP</div>
              <span className="text-white font-bold text-lg">Smart Platform</span>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              Your trusted partner for premium equipment rental. Serving professionals across the country since 2005.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={13} className="text-yellow-400" /> +1 234 567 890
              </a>
              <a href="mailto:info@smartplatform.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={13} className="text-yellow-400" /> info@smartplatform.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-yellow-400 mt-0.5 shrink-0" />
                <span>123 Industrial Blvd, New York, NY 10001</span>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              {[Globe, Share2, Link, ExternalLink].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-[#0a1628] transition-all text-gray-400">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-bold text-sm mb-4">{heading}</h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-yellow-400 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>© 2026 Smart Platform. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
