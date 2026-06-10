import { useParams, Link, useNavigate } from 'react-router-dom';
import { stores } from '../data/stores';
import { products } from '../data/products';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Package, Building2 } from 'lucide-react';

export default function StoreDetails() {
  const { storeId } = useParams<{ storeId: string }>();
  const navigate = useNavigate();

  const store = stores.find(s => s._id === storeId);
  const storeProducts = products.filter(p => p.storeId === storeId);

  if (!store) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Store not found</h1>
          <Link to="/stores" className="text-blue-600 hover:text-blue-700">
            Back to Stores
          </Link>
        </div>
      </div>
    );
  }

  const dayNames = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const today = dayNames[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-80 bg-gray-200 overflow-hidden">
        <img
          src={store.bannerUrl}
          alt={store.storeName}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => navigate('/stores')}
          className="absolute top-6 left-6 bg-white rounded-lg px-4 py-2 flex items-center gap-2 shadow-md hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Stores
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-8 -mt-16 pb-16">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-start gap-6">
            <img
              src={store.logoUrl}
              alt={store.storeName}
              className="w-32 h-32 rounded-lg object-cover shadow-sm"
            />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{store.storeName}</h1>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    store.status === 'active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {store.status}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{store.description}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4" />
                  <span>{store.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4" />
                  <span>{store.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Package className="w-4 h-4" />
                  <span>{storeProducts.length} products</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-gray-700" />
                <h2 className="text-xl font-bold text-gray-900">Store Locations</h2>
              </div>
              <div className="space-y-6">
                {store.locations.map(location => (
                  <div key={location._id} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-4 h-4 text-gray-600" />
                      <h3 className="font-semibold text-gray-900">{location.branch}</h3>
                    </div>
                    {location.branchDescription && (
                      <p className="text-sm text-gray-600 mb-3">{location.branchDescription}</p>
                    )}
                    <div className="text-sm text-gray-700 space-y-1">
                      <p>{location.addressLine1}</p>
                      {location.addressLine2 && <p>{location.addressLine2}</p>}
                      <p>
                        {location.barangay && `${location.barangay}, `}
                        {location.city}, {location.zipCode}
                      </p>
                      <p>{location.country}</p>
                      <p className="flex items-center gap-2 mt-2">
                        <Phone className="w-3 h-3" />
                        {location.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Store Policies</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Shipping</h3>
                  <div className="space-y-3">
                    {store.policies.shipping.map((policy, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-1">{policy.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{policy.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-gray-700">
                            Regions: {policy.regions.join(', ')}
                          </span>
                          <span className="font-medium text-gray-900">
                            {policy.cost === 0 ? 'Free' : `${policy.currency} ${policy.cost}`}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Returns</h3>
                  <div className="space-y-3">
                    {store.policies.returns.map((policy, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-1">{policy.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{policy.description}</p>
                        <p className="text-sm text-gray-500">{policy.conditions}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Support</h3>
                  <div className="space-y-3">
                    {store.policies.support.map((support, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-1">{support.method}</h4>
                        <p className="text-sm text-gray-700">{support.detail}</p>
                        <p className="text-sm text-gray-500 mt-1">{support.hours}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-gray-700" />
                <h2 className="text-xl font-bold text-gray-900">Operating Hours</h2>
              </div>
              <div className="space-y-3">
                {dayNames.map(day => {
                  const schedule = store.schedules[day as keyof typeof store.schedules];
                  const isToday = day === today;
                  return (
                    <div
                      key={day}
                      className={`flex justify-between items-center py-2 px-3 rounded ${
                        isToday ? 'bg-blue-50 border border-blue-200' : ''
                      }`}
                    >
                      <span
                        className={`font-medium ${
                          isToday ? 'text-blue-900' : 'text-gray-700'
                        }`}
                      >
                        {day.charAt(0).toUpperCase() + day.slice(1)}
                      </span>
                      <span
                        className={`text-sm ${
                          isToday ? 'text-blue-700' : 'text-gray-600'
                        }`}
                      >
                        {schedule.open && schedule.close
                          ? `${schedule.open} - ${schedule.close}`
                          : 'Closed'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Store Owner</h2>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-600">
                    {store.ownerName.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{store.ownerName}</h3>
                  <p className="text-sm text-gray-600">{store.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Store Info</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-600">Created:</span>
                  <span className="ml-2 font-medium text-gray-900">
                    {new Date(store.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Last Updated:</span>
                  <span className="ml-2 font-medium text-gray-900">
                    {new Date(store.updatedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Store Slug:</span>
                  <span className="ml-2 font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                    {store.slug}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
