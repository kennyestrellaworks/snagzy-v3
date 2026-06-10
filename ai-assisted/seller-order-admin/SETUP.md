# Orders Admin Setup Guide

## Database Setup

The orders table has been created in your Supabase database with the following structure:
- Order information (buyer, items, payment, shipping)
- Order status tracking
- Timeline of status changes

## Seeding the Database

To populate your database with the sample orders from `orders.js`:

1. Make sure your `.env` file has the Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

2. Run the seed script:
   ```bash
   npm run seed
   ```

This will import all orders from `src/data/orders.js` into your Supabase database.

## Features

- **Orders List**: View all orders with search and filter capabilities
- **Order Details**: See complete order information including customer details, items, payment info, and shipping address
- **Status Management**: Update order status from the detail page
- **Timeline Tracking**: Automatic timeline updates when status changes

## Available Order Statuses

- Order Placed
- Payment Confirmed
- Processing
- Shipped
- Out for Delivery
- Delivered
- Cancelled
- Awaiting Payment
