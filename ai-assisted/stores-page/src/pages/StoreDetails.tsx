import { useParams, Link } from 'react-router-dom';
import { stores } from '../data/stores';
import { products } from '../data/products';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Package, ShieldCheck } from 'lucide-react';

export default function StoreDetails() {
  const { slug } = useParams<{ slug: string }>();
  const store = stores.find((s) => s.slug === slug);
  const storeProducts = products.filter((p) => p.storeId === store?._id);

  if (!store) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Store not found</h1>
          <Link to="/stores" className="text-blue-600 hover:text-blue-800">
            Back to stores
          </Link>
        </div>
      </div>
    );
  }

  const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link
          to="/stores"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Stores
        </Link>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden mb-6">
          <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600"></div>

          <div className="px-8 py-6">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 -mt-16 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                  {store.storeName.charAt(0)}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">
                      {store.storeName}
                    </h1>
                    <p className="text-slate-600 mb-4">{store.description}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      store.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-slate-100 text-slate-800'
                    }`}
                  >
                    {store.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Mail className="w-5 h-5" />
                    <div>
                      <div className="text-xs text-slate-500">Email</div>
                      <div className="font-medium">{store.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Phone className="w-5 h-5" />
                    <div>
                      <div className="text-xs text-slate-500">Phone</div>
                      <div className="font-medium">{store.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Package className="w-5 h-5" />
                    <div>
                      <div className="text-xs text-slate-500">Products</div>
                      <div className="font-medium">{storeProducts.length} items</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-slate-600" />
                <h2 className="text-xl font-bold text-slate-900">Locations</h2>
              </div>

              <div className="space-y-4">
                {store.locations.map((location) => (
                  <div
                    key={location._id}
                    className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {location.branch}
                    </h3>
                    {location.branchDescription && (
                      <p className="text-sm text-slate-600 mb-3">
                        {location.branchDescription}
                      </p>
                    )}
                    <div className="space-y-1 text-sm text-slate-600">
                      <p>
                        {location.addressLine1}
                        {location.addressLine2 && `, ${location.addressLine2}`}
                      </p>
                      <p>
                        {location.barangay}, {location.city}
                      </p>
                      <p>
                        {location.zipCode}, {location.country}
                      </p>
                      <p className="flex items-center gap-2 mt-2">
                        <Phone className="w-4 h-4" />
                        {location.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-slate-600" />
                <h2 className="text-xl font-bold text-slate-900">Policies</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Shipping</h3>
                  <div className="space-y-3">
                    {store.policies.shipping.map((policy, idx) => (
                      <div key={idx} className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-medium text-slate-900">{policy.title}</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          {policy.description}
                        </p>
                        <p className="text-sm text-slate-500 mt-1">
                          Regions: {policy.regions.join(', ')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Returns</h3>
                  <div className="space-y-3">
                    {store.policies.returns.map((policy, idx) => (
                      <div key={idx} className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-medium text-slate-900">{policy.title}</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          {policy.description}
                        </p>
                        <p className="text-sm text-slate-500 mt-1">
                          {policy.conditions}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Support</h3>
                  <div className="space-y-3">
                    {store.policies.support.map((support, idx) => (
                      <div key={idx} className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-medium text-slate-900">{support.method}</h4>
                        <p className="text-sm text-slate-600 mt-1">{support.detail}</p>
                        <p className="text-sm text-slate-500 mt-1">{support.hours}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-slate-600" />
                <h2 className="text-xl font-bold text-slate-900">Schedule</h2>
              </div>

              <div className="space-y-2">
                {daysOfWeek.map((day) => {
                  const schedule = store.schedules[day as keyof typeof store.schedules];
                  const isOpen = schedule.open && schedule.close;

                  return (
                    <div
                      key={day}
                      className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0"
                    >
                      <span className="text-slate-900 capitalize font-medium">
                        {day}
                      </span>
                      <span
                        className={`text-sm ${
                          isOpen ? 'text-slate-600' : 'text-red-600 font-medium'
                        }`}
                      >
                        {isOpen ? `${schedule.open} - ${schedule.close}` : 'Closed'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Store Owner</h2>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-slate-500">Name</div>
                  <div className="font-medium text-slate-900">{store.ownerName}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Store ID</div>
                  <div className="font-mono text-xs text-slate-600">{store._id}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Created</div>
                  <div className="text-slate-900">
                    {new Date(store.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
