/*
  # Create orders table

  1. New Tables
    - `orders`
      - `id` (text, primary key) - Order ID from the source data
      - `buyer_info` (jsonb) - Buyer and shipping information
      - `items` (jsonb) - Array of order items with product details
      - `summary` (jsonb) - Order summary with pricing information
      - `payment_info` (jsonb) - Payment method and transaction details
      - `current_status` (text) - Current order status
      - `timeline` (jsonb) - Array of status timeline events
      - `created_at` (timestamptz) - Order creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `orders` table
    - Add policy for public read access (for demo purposes)
    - Add policy for public update access to allow status changes (for demo purposes)
*/

CREATE TABLE IF NOT EXISTS orders (
  id text PRIMARY KEY,
  buyer_info jsonb NOT NULL,
  items jsonb NOT NULL,
  summary jsonb NOT NULL,
  payment_info jsonb NOT NULL,
  current_status text NOT NULL,
  timeline jsonb NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to orders"
  ON orders
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public update access to orders"
  ON orders
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_orders_current_status ON orders(current_status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);