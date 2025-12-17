import AutoBreadcrumb from '@/components/module/AutoBreadcrumb';
import AboutSection from '@/components/section/AboutSection';
import CtaSection from '@/components/section/CtaSection';
import FeatureSection from '@/components/section/FeatureSection';

export default function AboutPage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="w-full h-75 bg-gray-300"></div>

      {/* Breadcrumb */}
      <div className="px-4 lg:px-8">
        <AutoBreadcrumb />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Features Section */}
      <FeatureSection />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
