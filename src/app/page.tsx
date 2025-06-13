'use client' // Add 'use client' because we will use client-side hooks

// Import Header component
import Header from "./header";
import Link from 'next/link'; // Import Link for navigation
// Import the useInView hook
import { useInView } from 'react-intersection-observer';

export default function BerandaPage() {

  // Use useInView for each section you want to animate
  // The ref is attached to the element, and inView becomes true when it's visible
  const [heroRef, heroInView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  const [introRef, introInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [whyRef, whyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [howToUseRef, howToUseInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [closingRef, closingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <> {/* Use a fragment or div as the root element */}
      <Header /> {/* Include the Header component */}
      <main>
        {/* 1. Hero Image Section (Converted from index.html) */}
        <section ref={heroRef} className={`py-10 px-6 transition-opacity transition-transform duration-700 ease-out ${
            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="container mx-auto">
            <div className="hero-image rounded-2xl overflow-hidden">
              <svg className="w-full h-64 md:h-96" viewBox="0 0 1280 384" xmlns="http://www.w3.org/2000/svg">
                {/* Gambar memenuhi ruang sepenuhnya */}
                {/* <image href="/wide.png" x="0" y="0" width="100%" height="100%" preserveAspectRatio="fillRule" /> */}
                <image href="/wide2.png" x="0" y="0" height="100%" width="100%"></image>

              </svg>
            </div>
          </div>
        </section>


        {/* 2. Introduction Section */}
        <section ref={introRef} className={`py-12 px-6 transition-opacity transition-transform duration-700 ease-out delay-100 ${
            introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">HaloHati</h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Platform inovatif yang menghubungkan masyarakat dengan layanan (AI) kesehatan mental yang siap membantu.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="step-card bg-white p-6 rounded-lg shadow-md flex items-center w-full md:w-auto">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Mudah Diakses</h3>
                  <p className="text-gray-600">Kapan saja, di mana saja</p>
                </div>
              </div>
              <div className="step-card bg-white p-6 rounded-lg shadow-md flex items-center w-full md:w-auto">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Terpercaya</h3>
                  <p className="text-gray-600">Didukung OpenAI 4-o</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why Important Section */}
        <section ref={whyRef} className={`py-16 bg-gray-50 transition-opacity transition-transform duration-700 ease-out delay-200 ${
            whyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mengapa HaloHati Penting?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="step-card bg-white p-8 rounded-xl shadow-md"> {/* Added step-card class */}
                <div className="bg-blue-500 w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Krisis Kesehatan Mental</h3>
                <p className="text-gray-600 text-center">
                  1 dari 10 orang Indonesia mengalami masalah kesehatan mental, namun akses ke layanan masih sangat terbatas.
                </p>
              </div>

              <div className="step-card bg-white p-8 rounded-xl shadow-md"> {/* Added step-card class */}
                <div className="bg-indigo-500 w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Stigma Sosial</h3>
                <p className="text-gray-600 text-center">
                  Stigma membuat banyak orang enggan mencari bantuan. HaloHati menawarkan privasi dan kenyamanan.
                </p>
              </div>

              <div className="step-card bg-white p-8 rounded-xl shadow-md"> {/* Added step-card class */}
                <div className="bg-purple-500 w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Keterjangkauan</h3>
                <p className="text-gray-600 text-center">
                  Biaya konsultasi kesehatan mental konvensional seringkali mahal. HaloHati menawarkan solusi GRATIS dari AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. How To Use Section */}
        <section ref={howToUseRef} className={`py-16 px-6 transition-opacity transition-transform duration-700 ease-out delay-300 ${
            howToUseInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Cara Menggunakan HaloHati</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Tiga langkah sederhana untuk memulai perjalanan kesehatan mental Anda
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="step-card bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 font-bold text-xl">1</div>
                <h3 className="text-xl font-semibold mb-3">Klik Menu (Chat) </h3>
                <p className="text-gray-600 mb-4">
                  Dengan sekali klik langsung dapat ngobrol bareng HaloHati. Semua data Anda dijamin kerahasiaannya^^.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 h-2 bg-blue-200 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="step-card bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-500">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600 font-bold text-xl">2</div>
                <h3 className="text-xl font-semibold mb-3">Mulai Percakapan</h3>
                <p className="text-gray-600 mb-4">
                  Ceritakan perasaan Anda kepada asisten AI kami yang empatik.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex flex-col space-y-2">
                    <div className="self-start bg-gray-200 px-3 py-2 rounded-lg max-w-xs">
                    <p className="text-sm">&quot;Halo, saya merasa cemas akhir-akhir ini&quot;</p>
                    </div>
                    <div className="self-end bg-indigo-100 px-3 py-2 rounded-lg max-w-xs">
                    <p className="text-sm">&quot;Saya mengerti perasaan Anda. Mari kita bicarakan lebih lanjut...&quot;</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="step-card bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600 font-bold text-xl">3</div>
                <h3 className="text-xl font-semibold mb-3">Dapatkan Dukungan</h3>
                <p className="text-gray-600 mb-4">
                  Akses dukungan, latihan, dan teknik yang dipersonalisasi untuk membantu Anda mengelola kesehatan mental.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Teman Cerita</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Solusi</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Meditasi Terpandu</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Aesthetic Closing Section */}
        <section ref={closingRef} className={`py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white transition-opacity transition-transform duration-700 ease-out delay-400 ${
            closingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              {/* SVG Icon (Adjusted for SVG attributes) */}
              <div className="w-12 h-12 rounded-full bg-white/25 mx-auto flex items-center justify-center mb-6">{/* Wrapper div untuk centering dan background */}
                <img
                  src="/logo-white.svg" // Menggunakan tag img untuk menampilkan file logo.svg
                  alt="HaloHati Logo" // Menambahkan alt text untuk aksesibilitas
                  className="h-8 w-8" // Menggunakan kelas untuk ukuran
                />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mulai Perjalanan Kesehatan Mental Anda</h2>
              <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
                &quot;Setiap langkah kecil menuju kesehatan mental yang lebih baik adalah pencapaian besar. Bersama HaloHati, Anda tidak sendirian dalam perjalanan ini.&quot;
              </p>

              {/* Use Link component for navigation */}
              <Link href="/chat" className="inline-block bg-white text-indigo-700 font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all shadow-lg"> {/* Link to /chat */}
                  Mulai Sekarang
              </Link>


              <div className="mt-16 flex justify-center">
                <div className="inline-flex space-x-2">
                  <span className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0s' }}></span>
                  <span className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400">© 2023 HaloHati. Semua hak dilindungi.</p>
      </div>
        </footer>
    </main>
    </>
  );
}
