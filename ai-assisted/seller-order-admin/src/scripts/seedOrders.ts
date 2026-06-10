import { supabase } from '../lib/supabase';
import { orders } from '../data/orders';

async function seedOrders() {
  console.log('Starting to seed orders...');

  try {
    const ordersData = orders.map((order) => ({
      id: order._id,
      buyer_info: order.buyerInfo,
      items: order.items,
      summary: order.summary,
      payment_info: order.paymentInfo,
      current_status: order.currentStatus,
      timeline: order.timeline,
      created_at: order.createdAt,
      updated_at: order.updatedAt,
    }));

    const { data, error } = await supabase.from('orders').upsert(ordersData, {
      onConflict: 'id',
    });

    if (error) {
      console.error('Error seeding orders:', error);
      throw error;
    }

    console.log(`Successfully seeded ${ordersData.length} orders`);
    console.log('Seeding complete!');
  } catch (error) {
    console.error('Failed to seed orders:', error);
    process.exit(1);
  }
}

seedOrders();
