import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { stores } from '../data/stores';
import { products } from '../data/products';
import { ArrowUpDown, Search, Filter } from 'lucide-react';

type SortField = 'storeName' | 'ownerName' | 'city' | 'status' | 'products';
type SortOrder = 'asc' | 'desc';

export default function Stores() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortField, setSortField] = useState<SortField>('storeName');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const searchQuery = searchParams.get('search') || '';
  const statusFilter = searchParams.get('status') || 'all';
  const cityFilter = searchParams.get('city') || 'all';

  const storesWithProducts = stores.map((store) => ({
    ...store,
    productCount: products.filter((p) => p.storeId === store._id).length,
    primaryCity: store.locations[0]?.city || 'N/A',
  }));

  const cities = Array.from(
    new Set(stores.flatMap((s) => s.locations.map((l) => l.city)))
  ).sort();

  const filteredAndSortedStores = useMemo(() => {
    let filtered = storesWithProducts;

    if (searchQuery) {
      filtered = filtered.filter(
        (store) =>
          store.storeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          store.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          store.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter((store) => store.status === statusFilter);
    }

    if (cityFilter !== 'all') {
      filtered = filtered.filter((store) =>
        store.locations.some((loc) => loc.city === cityFilter)
      );
    }

    filtered.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortField) {
        case 'storeName':
          aValue = a.storeName;
          bValue = b.storeName;
          break;
        case 'ownerName':
          aValue = a.ownerName;
          bValue = b.ownerName;
          break;
        case 'city':
          aValue = a.primaryCity;
          bValue = b.primaryCity;
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        case 'products':
          aValue = a.productCount;
          bValue = b.productCount;
          break;
        default:
          aValue = a.storeName;
          bValue = b.storeName;
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOrder === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return sortOrder === 'asc'
        ? (aValue as number) - (bValue as number)
        : (bValue as number) - (aValue as number);
    });

    return filtered;
  }, [storesWithProducts, searchQuery, statusFilter, cityFilter, sortField, sortOrder]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const updateSearchParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Stores</h1>
          <p className="text-slate-600">Browse and explore all available stores</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-slate-600" />
            <h2 className="text-lg font-semibold text-slate-900">Filters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search stores..."
                  value={searchQuery}
                  onChange={(e) => updateSearchParam('search', e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => updateSearchParam('status', e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                City
              </label>
              <select
                value={cityFilter}
                onChange={(e) => updateSearchParam('city', e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Cities</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <button
                      onClick={() => handleSort('storeName')}
                      className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      Store Name
                      <ArrowUpDown className="w-4 h-4" />
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <button
                      onClick={() => handleSort('ownerName')}
                      className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      Owner
                      <ArrowUpDown className="w-4 h-4" />
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <button
                      onClick={() => handleSort('city')}
                      className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      City
                      <ArrowUpDown className="w-4 h-4" />
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <button
                      onClick={() => handleSort('status')}
                      className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      Status
                      <ArrowUpDown className="w-4 h-4" />
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <button
                      onClick={() => handleSort('products')}
                      className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      Products
                      <ArrowUpDown className="w-4 h-4" />
                    </button>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <span className="text-sm font-semibold text-slate-900">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredAndSortedStores.map((store) => (
                  <tr
                    key={store._id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                          {store.storeName.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">
                            {store.storeName}
                          </div>
                          <div className="text-sm text-slate-500">{store.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-slate-900">{store.ownerName}</div>
                      <div className="text-sm text-slate-500">{store.phone}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-slate-900">{store.primaryCity}</div>
                      <div className="text-sm text-slate-500">
                        {store.locations.length} location{store.locations.length !== 1 ? 's' : ''}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          store.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-slate-100 text-slate-800'
                        }`}
                      >
                        {store.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-slate-900 font-medium">
                        {store.productCount}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/stores/${store.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredAndSortedStores.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">No stores found</p>
              <p className="text-slate-400 text-sm mt-1">
                Try adjusting your filters
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 text-sm text-slate-600">
          Showing {filteredAndSortedStores.length} of {stores.length} stores
        </div>
      </div>
    </div>
  );
}
