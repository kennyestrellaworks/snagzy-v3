import image1 from "../../assets/images/photo-1505740420928-5e560c06d30e.jpg";
import image2 from "../../assets/images/photo-1576697010739-6373b63f3204.jpg";
import image3 from "../../assets/images/photo-1579586337278-3befd40fd17a.jpg";
import image4 from "../../assets/images/photo-1597892657493-6847b9640bac.jpg";

export const Hero = () => {
  const sitePerformance = {
    totalProducts: "10k+",
    totalVendors: "500+",
    totalCustomers: "100k+",
  };

  return (
    <section className="relative bg-background text-foreground py-20 md:py-32 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover Amazing Products from{" "}
              <span className="text-primary">Multiple Vendors</span>
            </h1>

            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              Shop from thousands of products across multiple categories. Find
              the best deals from trusted vendors all in one place.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {Object.entries(sitePerformance).map(([key, value]) => (
                <div
                  key={key}
                  className="flex flex-col items-center md:items-start"
                >
                  <span className="text-4xl font-bold text-primary">
                    {value}
                  </span>
                  <span className="mt-1 text-muted-foreground text-lg capitalize">
                    {key.replace("total", "")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side (Images) */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-lg bg-secondary overflow-hidden">
                  <img
                    src={image1}
                    alt="Featured product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg bg-accent overflow-hidden">
                  <img
                    src={image2}
                    alt="Featured product"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-lg bg-accent overflow-hidden">
                  <img
                    src={image3}
                    alt="Featured product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg bg-secondary overflow-hidden">
                  <img
                    src={image4}
                    alt="Featured product"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover Amazing Products from{" "}
              <span className="text-primary">Multiple Vendors</span>
            </h1>

            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              Shop from thousands of products across multiple categories. Find
              the best deals from trusted vendors all in one place.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {Object.entries(sitePerformance).map(([key, value]) => (
                <div
                  key={key}
                  className="flex flex-col items-center md:items-start"
                >
                  <span className="text-4xl font-bold text-primary">
                    {value}
                  </span>
                  <span className="mt-1 text-muted-foreground text-lg capitalize">
                    {key.replace("total", "")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side (Images) */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-lg bg-secondary overflow-hidden">
                  <img
                    src={image1}
                    alt="Featured product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg bg-accent overflow-hidden">
                  <img
                    src={image2}
                    alt="Featured product"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-lg bg-accent overflow-hidden">
                  <img
                    src={image3}
                    alt="Featured product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg bg-secondary overflow-hidden">
                  <img
                    src={image4}
                    alt="Featured product"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
