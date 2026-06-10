import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { stores } from '../data/stores';
import { users } from '../data/users';
import { products } from '../data/products';
import { ArrowUpDown, ArrowUp, ArrowDown, Search, Filter } from 'lucide-react';

type SortField = 'storeName' | 'ownerName' | 'status' | 'createdAt' | 'products';
type SortOrder = 'asc' | 'desc';

export default function Stores() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortField, setSortField] = useState<SortField>('storeName');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const searchQuery = searchParams.get('search') || '';
  const statusFilter = searchParams.get('status') || '';
  const ownerFilter = searchParams.get('owner') || '';

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const getProductCount = (storeId: string) => {
    return products.filter(p => p.storeId === storeId).length;
  };

  const getOwnerImage = (ownerId: string) => {
    const user = users.find(u => u._id === ownerId);
    return user?.image || '';
  };

  const filteredAndSortedStores = useMemo(() => {
    let filtered = [...stores];

    if (searchQuery) {
      filtered = filtered.filter(
        store =>
          store.storeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          store.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          store.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (statusFilter) {
      filtered = filtered.filter(store => store.status === statusFilter);
    }

    if (ownerFilter) {
      filtered = filtered.filter(store => store.ownerId === ownerFilter);
    }

    filtered.sort((a, b) => {
      let aValue: string | number = '';
      let bValue: string | number = '';

      switch (sortField) {
        case 'storeName':
          aValue = a.storeName;
          bValue = b.storeName;
          break;
        case 'ownerName':
          aValue = a.ownerName;
          bValue = b.ownerName;
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        case 'createdAt':
          aValue = new Date(a.createdAt).getTime();
          bValue = new Date(b.createdAt).getTime();
          break;
        case 'products':
          aValue = getProductCount(a._id);
          bValue = getProductCount(b._id);
          break;
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOrder === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return sortOrder === 'asc' ? Number(aValue) - Number(bValue) : Number(bValue) - Number(aValue);
    });

    return filtered;
  }, [searchQuery, statusFilter, ownerFilter, sortField, sortOrder]);

  const uniqueOwners = useMemo(() => {
    const ownerMap = new Map();
    stores.forEach(store => {
      if (!ownerMap.has(store.ownerId)) {
        ownerMap.set(store.ownerId, store.ownerName);
      }
    });
    return Array.from(ownerMap, ([id, name]) => ({ id, name }));
  }, []);

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ArrowUpDown className="w-4 h-4" />;
    return sortOrder === 'asc' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Stores</h1>
          <p className="text-gray-600">Browse and manage all stores</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search stores..."
                  value={searchQuery}
                  onChange={e => {
                    const params = new URLSearchParams(searchParams);
                    if (e.target.value) {
                      params.set('search', e.target.value);
                    } else {
                      params.delete('search');
                    }
                    setSearchParams(params);
                  }}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={statusFilter}
                onChange={e => {
                  const params = new URLSearchParams(searchParams);
                  if (e.target.value) {
                    params.set('status', e.target.value);
                  } else {
                    params.delete('status');
                  }
                  setSearchParams(params);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Statuses</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Owner
              </label>
              <select
                value={ownerFilter}
                onChange={e => {
                  const params = new URLSearchParams(searchParams);
                  if (e.target.value) {
                    params.set('owner', e.target.value);
                  } else {
                    params.delete('owner');
                  }
                  setSearchParams(params);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Owners</option>
                {uniqueOwners.map(owner => (
                  <option key={owner.id} value={owner.id}>
                    {owner.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {(searchQuery || statusFilter || ownerFilter) && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => setSearchParams(new URLSearchParams())}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort('storeName')}
                      className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600"
                    >
                      Store <SortIcon field="storeName" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort('ownerName')}
                      className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600"
                    >
                      Owner <SortIcon field="ownerName" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort('status')}
                      className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600"
                    >
                      Status <SortIcon field="status" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort('products')}
                      className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600"
                    >
                      Products <SortIcon field="products" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort('createdAt')}
                      className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600"
                    >
                      Created <SortIcon field="createdAt" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredAndSortedStores.map(store => (
                  <tr key={store._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={store.logoUrl}
                          alt={store.storeName}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{store.storeName}</div>
                          <div className="text-sm text-gray-500">{store.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <img
                          src={getOwnerImage(store.ownerId)}
                          alt={store.ownerName}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{store.ownerName}</div>
                          <div className="text-xs text-gray-500">{store.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          store.status === 'active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {store.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-gray-900">
                        {getProductCount(store._id)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">
                        {new Date(store.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/stores/${store._id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
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
              <p className="text-gray-500">No stores found matching your filters.</p>
            </div>
          )}
        </div>

        <div className="mt-6 text-sm text-gray-600">
          Showing {filteredAndSortedStores.length} of {stores.length} stores
        </div>
      </div>
    </div>
  );
}
