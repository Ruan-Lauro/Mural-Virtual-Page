import { Download, Smartphone, Pencil, NotebookIcon } from 'lucide-react';

function App() {

  const handleDownload = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); 
    
    const fileUrl = '/Mural Virtual.rar'; 
    const fileName = 'Mural Virtual.rar'; 
  
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Hero Section */}
      <header className="bg-[#1a1a1a] text-[#f5f4f4] py-16">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center space-x-2">
              <img 
                  src="/ImagensWhite.png"
                  alt="App Preview"
                  style={{width:"220px"}}
                />
            </div>
          </nav>
          
          <div className="flex flex-col nm:flex-row items-center justify-between"  >
            <div className="nm:w-1/2 mb-8 nm:mb-0 nm:mr-3">
              <h1 className="text-5xl md:text-6xl font-inter font-bold mb-6">
                Your institution informed
              </h1>
              <p className="text-xl mb-8 text-[#f5f4f4]/90">
              Create a group for your institution and keep everyone informed, with an exchange of information and control of data.
              </p>
              <button onClick={handleDownload} className="bg-[#f5f4f4] text-[#1a1a1a] px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 hover:bg-[#f5f4f4]/90 transition-colors">
                <Download className="w-5 h-5" />
                <span>Download APK</span>
              </button>
            </div>
            <div className="w-[90%] sm:w-auto flex justify-center">
              <img 
                src="/quadro.jpg"
                alt="App Preview"
                className="rounded-lg shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-[#f5f4f4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#1a1a1a]">Why Choose Mural Virutal?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<NotebookIcon />}
              title="All in one place"
              description="Everything you need to know in one place."
            />
            <FeatureCard 
              icon={<Smartphone />}
              title="Mobile-First Design"
              description="Optimized for your device, available whenever information strikes"
            />
            <FeatureCard 
              icon={<Pencil />}
              title="Easy Sharing"
              description="Inform people from anywhere, you just need to have access to the internet."
            />
          </div>
        </div>
      </section>

      {/* Mascot Section */}
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#1a1a1a]">Meet Our Mascot</h2>
          <div className="flex justify-center mb-8">
            <img 
              src="/pensar.png" 
              alt="Virtual Mural Mascot" 
              className="w-40 h-40"
            />
          </div>
          <p className="text-lg text-[#1a1a1a]/80 max-w-2xl mx-auto">
            Our friendly mascot represents the simple joy of creating and sharing, always ready with a warm cup of inspiration.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-[#f5f4f4] py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Mural Virtual. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }:{icon:any; title:string; description:string}) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="text-[#1a1a1a] mb-4 w-12 h-12">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-[#1a1a1a]">{title}</h3>
      <p className="text-[#1a1a1a]/80">{description}</p>
    </div>
  );
}

export default App;