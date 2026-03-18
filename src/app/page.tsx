"use client";
import { useEffect } from 'react';

const L = "https://www.meshy.ai?via=Success";

const industries = [
  { emoji: "🎬", name: "Film Production" },
  { emoji: "🔧", name: "Product Design" },
  { emoji: "🎓", name: "Education" },
  { emoji: "🎮", name: "Game Development" },
  { emoji: "🖨️", name: "3D Printing" },
  { emoji: "🥽", name: "VR / AR" },
  { emoji: "🛋️", name: "Interior Design" },
];

const features = [
  {
    cls: "fcard-t2m", chip: "🟢 Text to 3D Model",
    title: "Text to 3D Model",
    desc: "Create detailed 3D models from your ideas using our Text to 3D Model tool, which generates accurate 3D models from simple text descriptions.",
    visual: (
      <div className="fcard-visual" style={{ padding: 0, overflow: 'hidden' }}>
        <img src="/feat-text-to-3d.png" alt="Text to 3D" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div className="fcard-prompt">A whimsical fox explorer, wearing explorer's costume...</div>
        <div className="fcard-gen-btn">✦ Generate</div>
      </div>
    ),
  },
  {
    cls: "fcard-i2m", chip: "🔵 Image to 3D Model",
    title: "Image to 3D Model",
    desc: "Transform your 2D images into detailed 3D models with our Image to 3D Model generator. Simply upload a photo and get a precise 3D model.",
    visual: (
      <div className="fcard-visual" style={{ padding: 0, overflow: 'hidden' }}>
        <img src="/feat-image-to-3d.png" alt="Image to 3D" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    ),
  },
  {
    cls: "fcard-tex", chip: "🟣 AI Texturing",
    title: "AI Texturing",
    desc: "Enhance your 3D models—generated or uploaded—using text prompts or reference images with our AI texture generator, crafting textures in any style you want.",
    visual: (
      <div className="fcard-visual" style={{ padding: 0, overflow: 'hidden' }}>
        <img src="/feat-ai-texturing.png" alt="AI Texturing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ display: 'flex', gap: 8, position: 'absolute', bottom: 12, left: 12 }}>
          {["Base Color", "Normal", "Roughness", "Metallic"].map(t => (
            <span key={t} style={{ fontSize: '0.65rem', background: 'rgba(0,0,0,0.6)', color: 'var(--accent)', padding: '3px 8px', borderRadius: 6, border: '1px solid var(--accent)', backdropFilter: 'blur(4px)' }}>{t}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    cls: "fcard-vid", chip: "🟠 3D to Video",
    title: "3D to Video",
    desc: "Bring your 3D models to life with dynamic video animations. Showcase your creations from any angle with cinematic quality video renders.",
    visual: (
      <div className="fcard-visual" style={{ padding: 0, overflow: 'hidden' }}>
        <img src="/feat-3d-video.png" alt="3D to Video" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ display: 'flex', gap: 6, position: 'absolute', bottom: 12, left: 12 }}>
          {["360° Spin", "Walk Cycle", "Cinematic Cam"].map(t => (
            <span key={t} style={{ fontSize: '0.65rem', background: 'rgba(0,0,0,0.6)', color: 'white', padding: '3px 8px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' }}>{t}</span>
          ))}
        </div>
      </div>
    ),
  },
];

const proBentos = [
  { cls: "pb pb-blue", icon: "◈", title: "Smart Remesh", desc: "Instantly adjust triangle or quad counts, switch topology types, and balance detail and performance on export with options from 1k to 300k polygons." },
  { cls: "pb pb-teal", icon: "🤸", title: "Rigging & Animation", desc: "Easily rig your characters with automatic rigging, and prepare them for animation and industry-standard workflows in seconds." },
  { cls: "pb pb-wide pb-dark", icon: "⧉", title: "Multiple Concurrent Tasks", desc: "Accelerate your workflow with bulk generation—Meshy can handle 50+ 3D model and texture tasks at once. Perfect for studios and large-scale production." },
  { cls: "pb pb-blue", icon: "🌐", title: "Multilingual Support", desc: "Besides English, Meshy supports prompts in Spanish, French, Chinese, Japanese, and more to create with ease." },
  { cls: "pb pb-teal pb-wide", icon: "🏃", title: "Animation Library", desc: "Meshy's animation library offers 500+ game-ready motions—from basic walks and jumps to complex shooting stances, fights, and dance moves. Ideal for Unity and Unreal integration." },
];

const showcaseItems = [
  { img: "/showcase-1.png", name: "High Fidelity Asset Pack 1", by: "Community Top Pick" },
  { img: "/showcase-2.png", name: "High Fidelity Asset Pack 2", by: "Community Top Pick" },
  { img: "/showcase-1.png", name: "Goblin Warrior Pro", by: "@studio_meshy" },
  { img: "/showcase-2.png", name: "Cyber Dragon V2", by: "@cyber_artist" },
];

const testimonials = [
  {
    stars: "★★★★★",
    text: "Meshy has completely transformed my 3D workflow. What used to take days in Blender now takes minutes. The quality of the meshes and textures is absolutely incredible.",
    name: "Marcus T.", role: "Game Developer at Indie Studio",
    avatarBg: "linear-gradient(135deg,#6366f1,#8b5cf6)",
  },
  {
    stars: "★★★★★",
    text: "As a product designer, I use Meshy daily to quickly prototype 3D concepts. The Image to 3D feature is a game-changer—it reads reference photos better than I expected.",
    name: "Sarah K.", role: "Senior Product Designer",
    avatarBg: "linear-gradient(135deg,#ec4899,#f43f5e)",
  },
  {
    stars: "★★★★★",
    text: "We integrated Meshy's API into our pipeline for generating game assets. The speed is unmatched. 50+ concurrent tasks with zero downtime. Highly recommend for studios.",
    name: "Alex R.", role: "CTO at GameForge Studios",
    avatarBg: "linear-gradient(135deg,#14b8a6,#0d9488)",
  },
];

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll('.r');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href={L} className="nav-logo">
            <div className="nav-logo-gem" />
            Meshy
          </a>
          <ul className="nav-links">
            <li><a href="#features">Features ▾</a></li>
            <li><a href={L}>API</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href={L}>Solutions ▾</a></li>
            <li><a href="#community">Community ▾</a></li>
            <li><a href={L}>Resources ▾</a></li>
          </ul>
          <div className="nav-right">
            <a href={L} className="btn btn-ghost">Contact Sales</a>
            <a href={L} className="btn btn-ghost">Log In</a>
            <a href={L} className="btn btn-primary">Sign Up Free</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            World's #1 AI 3D Generator · 1,000,000+ Users
          </div>

          <h1 className="hero-h1">
            The Easiest Way to <br />Create <em>3D Models</em>
          </h1>

          <p className="hero-sub">
            Meet the world's most popular and intuitive free AI 3D model generator.
            Transform text and images into stunning 3D models in seconds—no experience required!
          </p>

          <div className="hero-ctas">
            <a href={L} className="btn btn-primary btn-lg">✦ Start Creating</a>
            <a href={L} className="btn btn-outline btn-lg">View Community</a>
          </div>

          {/* Industry cards */}
          <div className="industry-cards">
            {industries.map((ind) => (
              <div key={ind.name} className="industry-card">
                <span className="industry-emoji">{ind.emoji}</span>
                <span className="industry-name">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            {[
              { val: "1M+", label: "Active Users Worldwide" },
              { val: "10M+", label: "3D Models Generated" },
              { val: "4.8/5", label: "Rating on G2 & Trustpilot" },
              { val: "500+", label: "Animation Presets" },
            ].map((s) => (
              <div key={s.label} className="r">
                <div className="stat-val">{s.val}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TRUST */}
      <div className="trust-sec">
        <div className="container">
          <div className="trust-label">Trusted by leading game studios and organizations</div>
          <div className="trust-logos">
            {["Georgia Tech", "Houzz", "D5 Render", "Nexon", "DNEG", "Meta", "Supercell"].map(b => (
              <span key={b} className="trust-logo">{b}</span>
            ))}
          </div>
          <div className="trust-ratings">
            <div className="rating-item">
              <span className="rating-stars">★★★★★</span>
              <span className="rating-score">4.8/5</span>
              <span>on G2</span>
            </div>
            <div className="rating-item">
              <span className="rating-stars">★★★★★</span>
              <span className="rating-score">4.8/5</span>
              <span>on Trustpilot</span>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES 2x2 */}
      <section className="section" id="features">
        <div className="container">
          <div className="r">
            <div className="section-label">FEATURES</div>
            <h2 className="section-h2">Everything you need to create in 3D</h2>
            <p className="section-sub">From characters to environments, Meshy's suite of AI tools handles your entire 3D creation workflow.</p>
          </div>

          <div className="feature-grid">
            {features.map((f, i) => (
              <div key={i} className={`fcard ${f.cls} r r-d${(i % 2) + 1}`}>
                <div className="fcard-chip">{f.chip}</div>
                <h3 className="fcard-h3">{f.title}</h3>
                <p className="fcard-desc">{f.desc}</p>
                {f.visual}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRO BENTO (Advanced features) */}
      <section className="section section-alt">
        <div className="container">
          <div className="r">
            <div className="section-label">PROFESSIONAL PRODUCTION</div>
            <h2 className="section-h2">Unlock Limitless<br />Creative Freedom</h2>
            <p className="section-sub">
              Craft props, characters, and environments in any style—from photorealistic to cartoon or sci-fi, all on your terms.
            </p>
          </div>

          <div className="pro-bento">
            {proBentos.map((b, i) => (
              <div key={i} className={`${b.cls} r r-d${(i % 3) + 1}`}>
                <div className="pb-icon">{b.icon}</div>
                <div className="pb-title">{b.title}</div>
                <div className="pb-desc">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div className="r section-center">
            <div className="section-label" style={{ justifyContent: 'center' }}>HOW IT WORKS</div>
            <h2 className="section-h2">From idea to 3D in seconds</h2>
            <p className="section-sub">No modeling experience required. Our AI handles everything.</p>
          </div>

          <div className="hiw-steps">
            {[
              { num: "01", emoji: "✍️", title: "Input", desc: "Upload an image or type a short text description. Meshy understands natural language and visual references in 10+ languages." },
              { num: "02", emoji: "⚙️", title: "Generate", desc: "Watch as our AI generates a high-quality 3D mesh with automatic PBR texturing—base color, roughness, metallic, and normal maps." },
              { num: "03", emoji: "📦", title: "Download", desc: "Preview and download in your preferred format: OBJ, GLB, FBX, USDZ, STL. Compatible with Blender, Unity, Unreal Engine, and more." },
            ].map((s, i) => (
              <div key={i} className={`hiw-step r r-d${i + 1}`}>
                <div className="hiw-num">{s.num}</div>
                <div className="hiw-visual">{s.emoji}</div>
                <div className="hiw-title">{s.title}</div>
                <div className="hiw-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY SHOWCASE */}
      <section className="section section-alt" id="community">
        <div className="container">
          <div className="r">
            <div className="section-label">COMMUNITY SHOWCASE</div>
            <h2 className="section-h2">See what creators are building</h2>
            <p className="section-sub">Millions of 3D assets created by the global Meshy community. Browse, get inspired, and share your own.</p>
          </div>

          <div className="showcase-grid">
            {showcaseItems.map((item, i) => (
              <a key={i} href={L} className={`scard r r-d${(i % 3) + 1}`}>
                <div className="scard-img">
                  <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="scard-info">
                  <div className="scard-name">{item.name}</div>
                  <div className="scard-by">{item.by}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="r" style={{ textAlign: 'center', marginTop: 40 }}>
            <a href={L} className="btn btn-outline btn-lg">Explore Full Community →</a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" id="pricing">
        <div className="container">
          <div className="r section-center">
            <div className="section-label" style={{ justifyContent: 'center' }}>PRICING</div>
            <h2 className="section-h2">Pricing</h2>
            <p className="section-sub">Start using Meshy for free. Upgrade to get discounted price and additional benefits.</p>
          </div>

          <div className="pricing-grid">
            {/* Free */}
            <div className="price-card r">
              <div className="price-tier">Free</div>
              <div className="price-tier-desc">No credit card needed</div>
              <div className="price-val">$0<sub> / month</sub></div>
              <div className="price-billing">Always free</div>
              <div className="price-div" />
              <ul className="price-list">
                <li><span className="fi-y">✓</span> 200 credits / month</li>
                <li><span className="fi-y">✓</span> Text to 3D generation</li>
                <li><span className="fi-y">✓</span> Image to 3D generation</li>
                <li><span className="fi-y">✓</span> Standard processing speed</li>
                <li><span className="fi-y">✓</span> OBJ, GLB export</li>
                <li><span className="fi-n">✗</span> Commercial license</li>
                <li><span className="fi-n">✗</span> Private assets</li>
                <li><span className="fi-n">✗</span> API access</li>
              </ul>
              <a href={L} className="btn-p btn-p-ghost">Get Started</a>
            </div>

            {/* Pro */}
            <div className="price-card featured r r-d1">
              <div className="feat-chip">MOST POPULAR</div>
              <div className="offer-chip">⚡ New User Offer: 50% Off First Month</div>
              <div className="price-tier" style={{ color: '#818cf8' }}>Pro</div>
              <div className="price-tier-desc">Best for individual creators</div>
              <div className="price-old">$20 / month</div>
              <div className="price-val">$15.17<sub> / month</sub></div>
              <div className="price-billing">Billed yearly — $182 today</div>
              <div className="price-div" />
              <ul className="price-list">
                <li><span className="fi-y">✓</span> <strong>1,000</strong> credits / month</li>
                <li><span className="fi-y">✓</span> Text to 3D + Image to 3D</li>
                <li><span className="fi-y">✓</span> AI Texturing</li>
                <li><span className="fi-y">✓</span> <strong>High-priority</strong> queue</li>
                <li><span className="fi-y">✓</span> All formats (OBJ, GLB, FBX, USDZ...)</li>
                <li><span className="fi-y">✓</span> <strong>Commercial license</strong></li>
                <li><span className="fi-y">✓</span> Private assets</li>
                <li><span className="fi-y">✓</span> API access</li>
              </ul>
              <a href={L} className="btn-p btn-p-primary">Subscribe Now →</a>
            </div>

            {/* Studio */}
            <div className="price-card r r-d2">
              <div className="price-tier" style={{ color: '#a78bfa' }}>Studio</div>
              <div className="price-tier-desc">Best for studios and teams</div>
              <div className="price-old">$60 / seat / month</div>
              <div className="price-val">$48<sub> / seat / month</sub></div>
              <div className="price-billing">Billed yearly — $576 today</div>
              <div className="price-div" />
              <ul className="price-list">
                <li><span className="fi-y">✓</span> <strong>Unlimited</strong> credits</li>
                <li><span className="fi-y">✓</span> All Pro features</li>
                <li><span className="fi-y">✓</span> <strong>Ultra-priority</strong> processing</li>
                <li><span className="fi-y">✓</span> 50+ concurrent tasks</li>
                <li><span className="fi-y">✓</span> Team collaboration</li>
                <li><span className="fi-y">✓</span> Dedicated Slack support</li>
                <li><span className="fi-y">✓</span> Rigging & Animation library</li>
                <li><span className="fi-y">✓</span> Custom branding</li>
              </ul>
              <a href={L} className="btn-p btn-p-primary">Subscribe Now →</a>
            </div>

            {/* Enterprise */}
            <div className="price-card r r-d3">
              <div className="price-tier" style={{ color: '#f59e0b' }}>Enterprise</div>
              <div className="price-tier-desc">For large volume & custom solutions</div>
              <div className="price-val" style={{ fontSize: '1.8rem' }}>Custom</div>
              <div className="price-billing">Tailored to your needs</div>
              <div className="price-div" />
              <ul className="price-list">
                <li><span className="fi-y">✓</span> Everything in Studio</li>
                <li><span className="fi-y">✓</span> Custom volume pricing</li>
                <li><span className="fi-y">✓</span> SLA & uptime guarantee</li>
                <li><span className="fi-y">✓</span> SSO / Custom domain</li>
                <li><span className="fi-y">✓</span> Dedicated account manager</li>
                <li><span className="fi-y">✓</span> Custom model fine-tuning</li>
                <li><span className="fi-y">✓</span> On-premise deployment</li>
                <li><span className="fi-y">✓</span> Priority feature requests</li>
              </ul>
              <a href={L} className="btn-p btn-p-ghost">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-alt">
        <div className="container">
          <div className="r section-center">
            <div className="section-label" style={{ justifyContent: 'center' }}>TESTIMONIALS</div>
            <h2 className="section-h2">Loved by creators worldwide</h2>
          </div>
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <div key={i} className={`tcard r r-d${i + 1}`}>
                <div className="tcard-stars">{t.stars}</div>
                <div className="tcard-text">"{t.text}"</div>
                <div className="tcard-author">
                  <div className="tcard-avatar" style={{ background: t.avatarBg }}>{t.name[0]}</div>
                  <div>
                    <div className="tcard-name">{t.name}</div>
                    <div className="tcard-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <div className="container r">
          <div className="cta-box">
            <h2 className="cta-h2">Start creating for free today</h2>
            <p className="cta-sub">
              Join 1,000,000+ artists, developers, and studios<br />
              who build faster and smarter with Meshy AI.
            </p>
            <div className="cta-btns">
              <a href={L} className="btn btn-primary btn-xl">✦ Sign Up Free</a>
              <a href={L} className="btn btn-outline btn-xl">View Showcase</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a href={L} className="nav-logo">
                <div className="nav-logo-gem" />
                Meshy
              </a>
              <p className="footer-desc">
                The world's most popular AI 3D model generator.
                Transform text and images into stunning 3D assets in seconds.
              </p>
            </div>
            {[
              { title: "Features", links: ["Text to 3D", "Image to 3D", "AI Texturing", "3D to Video", "Smart Remesh", "Rigging & Animation"] },
              { title: "Use Cases", links: ["Game Development", "Film Production", "Product Design", "Education", "3D Printing", "VR / AR"] },
              { title: "Resources", links: ["Documentation", "API Reference", "Blog", "Tutorials", "Changelog", "Status"] },
              { title: "Company", links: ["About Us", "Pricing", "Community", "Careers", "Privacy Policy", "Terms of Service"] },
            ].map((col) => (
              <div key={col.title}>
                <div className="footer-col-title">{col.title}</div>
                <ul className="footer-links">
                  {col.links.map(l => <li key={l}><a href={L}>{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <p>© 2024 Meshy AI Inc. · Affiliate: <a href={L} style={{ color: 'var(--accent)' }}>meshy.ai?via=Success</a></p>
            <div className="footer-right">
              <a href={L}>Twitter</a>
              <a href={L}>Discord</a>
              <a href={L}>LinkedIn</a>
              <a href={L}>YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
