import GradientButton from './components/GradientButton';
import { Download, Send, Heart, Sparkles, Rocket, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Gradient Buttons
          </h1>
          <p className="text-gray-600 text-lg">
            Beautiful, production-ready gradient buttons with hover effects
          </p>
        </div>

        <div className="space-y-12">
          <section className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Variants</h2>
            <div className="flex flex-wrap gap-4">
              <GradientButton variant="blue">Blue Gradient</GradientButton>
              <GradientButton variant="green">Green Gradient</GradientButton>
              <GradientButton variant="orange">Orange Gradient</GradientButton>
              <GradientButton variant="pink">Pink Gradient</GradientButton>
              <GradientButton variant="slate">Slate Gradient</GradientButton>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Sizes</h2>
            <div className="flex flex-wrap items-center gap-4">
              <GradientButton variant="blue" size="sm">
                Small Button
              </GradientButton>
              <GradientButton variant="green" size="md">
                Medium Button
              </GradientButton>
              <GradientButton variant="orange" size="lg">
                Large Button
              </GradientButton>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">With Icons</h2>
            <div className="flex flex-wrap gap-4">
              <GradientButton variant="blue" icon={Download}>
                Download
              </GradientButton>
              <GradientButton variant="green" icon={Send}>
                Send Message
              </GradientButton>
              <GradientButton variant="pink" icon={Heart}>
                Like
              </GradientButton>
              <GradientButton variant="orange" icon={Sparkles} iconPosition="right">
                Generate
              </GradientButton>
              <GradientButton variant="slate" icon={Rocket} size="lg">
                Launch Project
              </GradientButton>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">States</h2>
            <div className="flex flex-wrap gap-4">
              <GradientButton variant="blue" icon={Zap}>
                Active Button
              </GradientButton>
              <GradientButton variant="green" disabled>
                Disabled Button
              </GradientButton>
              <GradientButton
                variant="orange"
                icon={Download}
                disabled
              >
                Disabled with Icon
              </GradientButton>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Outline Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <GradientButton variant="blue" outline>
                Blue Outline
              </GradientButton>
              <GradientButton variant="green" outline>
                Green Outline
              </GradientButton>
              <GradientButton variant="orange" outline>
                Orange Outline
              </GradientButton>
              <GradientButton variant="pink" outline>
                Pink Outline
              </GradientButton>
              <GradientButton variant="slate" outline>
                Slate Outline
              </GradientButton>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Outline with Icons</h2>
            <div className="flex flex-wrap gap-4">
              <GradientButton variant="blue" outline icon={Download}>
                Download
              </GradientButton>
              <GradientButton variant="green" outline icon={Send}>
                Send
              </GradientButton>
              <GradientButton variant="pink" outline icon={Heart}>
                Like
              </GradientButton>
              <GradientButton variant="orange" outline icon={Sparkles} iconPosition="right">
                Explore
              </GradientButton>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Full Width</h2>
            <div className="space-y-4">
              <GradientButton variant="blue" className="w-full" icon={Send}>
                Subscribe to Newsletter
              </GradientButton>
              <GradientButton variant="green" className="w-full" icon={Rocket}>
                Get Started Free
              </GradientButton>
              <GradientButton variant="pink" className="w-full" outline icon={Heart}>
                Learn More
              </GradientButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
