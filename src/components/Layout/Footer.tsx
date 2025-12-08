import { Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <section className="container-fluid">
      <footer
        className="text-white rounded-3xl mx-4 mb-4 px-6 sm:px-8 py-8 relative overflow-hidden bg-gradient-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="560"
          height="365"
          viewBox="0 0 557 360"
          fill="none"
          className="pointer-events-none select-none absolute left-0 top-40 -translate-y-1/2 opacity-70"
          style={{ flexShrink: 0 }}
        >
          <path
            d="M131.436 -183.684C151.173 -241.445 230.976 -243.194 254.376 -188.932L256.356 -183.651L282.991 -105.758C289.094 -87.8941 298.958 -71.5471 311.916 -57.8196C324.874 -44.0921 340.626 -33.3033 358.108 -26.1811L365.269 -23.5076L443.159 3.095C500.916 22.8325 502.665 102.64 448.439 126.041L443.159 128.022L365.269 154.657C347.401 160.758 331.048 170.62 317.315 183.579C303.583 196.538 292.789 212.292 285.664 229.778L282.991 236.908L256.389 314.834C236.653 372.594 156.849 374.344 133.483 320.115L131.436 314.834L104.835 236.941C98.7353 219.071 88.8735 202.717 75.9151 188.984C62.9567 175.25 47.2033 164.457 29.7181 157.331L22.5892 154.657L-55.3002 128.055C-113.09 108.317 -114.839 28.5094 -60.5808 5.14136L-55.3002 3.095L22.5892 -23.5076C40.4521 -29.6118 56.7982 -39.476 70.525 -52.4348C84.2517 -65.3937 95.0399 -81.1459 102.162 -98.6287L104.835 -105.758L131.436 -183.684ZM457.945 -297.488C464.119 -297.488 470.17 -295.756 475.409 -292.489C480.648 -289.222 484.865 -284.55 487.582 -279.005L489.166 -275.143L500.718 -241.279L534.613 -229.727C540.8 -227.625 546.225 -223.733 550.198 -218.545C554.172 -213.356 556.516 -207.105 556.933 -200.583C557.35 -194.061 555.821 -187.562 552.541 -181.909C549.261 -176.257 544.377 -171.705 538.507 -168.832L534.613 -167.248L500.751 -155.696L489.199 -121.799C487.094 -115.613 483.199 -110.191 478.008 -106.22C472.818 -102.25 466.566 -99.9096 460.045 -99.496C453.524 -99.0824 447.026 -100.614 441.376 -103.897C435.726 -107.18 431.177 -112.066 428.307 -117.937L426.723 -121.799L415.172 -155.663L381.276 -167.215C375.089 -169.317 369.664 -173.209 365.691 -178.397C361.717 -183.586 359.374 -189.837 358.957 -196.359C358.539 -202.881 360.068 -209.38 363.348 -215.033C366.628 -220.685 371.512 -225.237 377.382 -228.11L381.276 -229.694L415.138 -241.246L426.69 -275.143C428.915 -281.664 433.126 -287.326 438.731 -291.333C444.336 -295.34 451.055 -297.492 457.945 -297.488Z"
            fill="white"
            fillOpacity="0.06"
          />
        </svg>

        <div className="relative z-10">
          <div className="hidden md:flex justify-between gap-12 pb-8 border-b border-white/10">
            {/* Left side */}
            <div className="space-y-6 flex flex-col justify-between">
              <div>
                <div className="pb-6">
                  <Link href="/">
                    <Image src="/logo-light.svg" alt="Logo" width={90} height={30} priority />
                  </Link>
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  Digital Signage Experience, Paired With AI
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed max-w-md">
                  Create, manage, and optimize digital signage faster with AI-driven tools. for seamless, dynamic experiences on any screen.
                </p>
              </div>

              {/* Social icons */}
              <div className="flex gap-4">
                {[
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Youtube, label: 'YouTube' },
                  { icon: Facebook, label: 'Facebook' },
                ].map(({ icon: Icon, label }) => (
                  <Link
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side links */}
            <div className="grid grid-cols-2 gap-8">
              {/* Product */}
              <div>
                <h4 className="font-semibold text-base mb-4">Product</h4>
                <ul className="space-y-3">
                  {[
                    { label: 'Solutions', href: '/solutions' },
                    { label: 'Download', href: '/download' },
                    { label: 'Pricing', href: '/pricing' },
                    { label: 'Widgets', href: '/widgets' },
                  ].map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className="text-sm text-gray-300 hover:text-white transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold text-base mb-4">Resources</h4>
                <ul className="space-y-3">
                  {[
                    { label: 'Industries', href: '/industries' },
                    { label: 'How it works', href: '/how-it-works' },
                    { label: 'Blogs', href: '/blogs' },
                    { label: 'Resources', href: '/resourcers' },
                    { label: 'Help center', href: '/help-center' },
                  ].map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className="text-sm text-gray-300 hover:text-white transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold text-base mb-4">Company</h4>
                <ul className="space-y-3">
                  {[{ label: 'About Us', href: '/about-us' }].map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className="text-sm text-gray-300 hover:text-white transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:hidden gap-8 pb-6 border-b border-white/10">
            {/* Logo and text */}
            <div className="text-center flex flex-col gap-4">
              <Link href="/">
                <Image src="/logo-light.svg" alt="Logo" width={90} height={30} priority className="mx-auto" />
              </Link>
              <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto">
                Create, manage, and optimize digital signage faster with AI-driven tools for seamless, dynamic experiences on any screen.
              </p>
            </div>

            {/* Quick links in columns */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <h4 className="font-semibold text-sm mb-3">Product</h4>
                <ul className="space-y-2">
                  <li><Link href="/industries" className="text-xs text-gray-300 hover:text-white">Solutions</Link></li>
                  <li><Link href="/download" className="text-xs text-gray-300 hover:text-white">Download</Link></li>
                  <li><Link href="/pricing" className="text-xs text-gray-300 hover:text-white">Pricing</Link></li>
                  <li><Link href="/widgets" className="text-xs text-gray-300 hover:text-white">Widgets</Link></li>
                </ul>
              </div>

              <div className="text-center">
                <h4 className="font-semibold text-sm mb-3">Resources</h4>
                <ul className="space-y-2">
                  <li><Link href="/industries" className="text-xs text-gray-300 hover:text-white">Industries</Link></li>
                  <li><Link href="/how-it-works" className="text-xs text-gray-300 hover:text-white">How it works</Link></li>
                  <li><Link href="/blogs" className="text-xs text-gray-300 hover:text-white">Blogs</Link></li>
                  <li><Link href="/resourcers" className="text-xs text-gray-300 hover:text-white">Resources</Link></li>
                  <li><Link href="/help-center" className="text-xs text-gray-300 hover:text-white">Help center</Link></li>
                </ul>
              </div>

              <div className="text-center">
                <h4 className="font-semibold text-sm mb-3">Company</h4>
                <ul className="space-y-2">
                  <li><Link href="/about-us" className="text-xs text-gray-300 hover:text-white">About Us</Link></li>
                </ul>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex justify-center gap-4">
              {[
                { icon: Instagram, href: 'https://instagram.com' },
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Youtube, href: 'https://youtube.com' },
                { icon: Facebook, href: 'https://facebook.com' },
              ].map(({ icon: Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">All rights reserved</p>
            <div className="flex gap-6">
              {[
                { label: 'Terms', href: '/terms' },
                { label: 'Privacy', href: '/privacy' },
                { label: 'Cookies', href: '/cookies' },
              ].map(({ label, href }) => (
                <Link key={label} href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
