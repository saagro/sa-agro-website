# 🚀 SA AGRO - Official "Go Live" Guide

Follow these steps to launch your platform live for the world to see!

## 1. Hosting Your Website (The "Cloud" Server)

To make your website accessible 24/7 globally, we highly recommend using **Vercel** as your #1 choice.

- **Vercel (#1 Choice)**: Specifically optimized for Vite projects. It offers a global edge network that ensures your site loads instantly in Nigeria, Europe, and Asia.
- **Netlify**: A reliable second choice if you prefer a different interface.

### Steps to Host

1. **GitHub Connection**: Upload your code to a private GitHub repository.
2. **Auto-Launch**: Log in to Vercel/Netlify and "Import" your repository.
3. **Settings**: The platform will automatically detect your project as a Vite app. Ensure the build command is `npm run build` and the output folder is `dist`.
4. **Done**: Your site will be live on a temporary URL (e.g., `sa-agro.vercel.app`).

---

## 2. Professional Domain Setup (e.g., saagro.com.ng)

To have a professional identity, you should connect a custom domain.

### Step 1: Buy a Domain

Use a registrar like **Whogohost** (excellent for `.com.ng` Nigerian domains) or **Namecheap**.

### Step 2: Point to Your Server

In your domain provider's dashboard, update the DNS settings:

- **For Vercel**: Create an **A Record** pointing `@` to `76.76.21.21`.
- **For Netlify**: Add a **CNAME Record** pointing `www` to your Netlify site URL.

### Step 3: Verification

Wait about 30 minutes for the internet to update. Your site will now be live at **<https://saagro.com.ng>**!

---

## 3. Paystack Payment Integration (Accepting Money)

To activate digital payments for smaller orders or custom invoices:

1. **Create Account**: Sign up at [paystack.com](https://paystack.com).
2. **Retrieve API Keys**: Go to **Settings > API Keys & Webhooks**.
3. **Plug & Play**:
   - **For Bulk Orders**: We recommend using "Paystack Payment Links" — create one in your dashboard and send the link to your customer via WhatsApp.
   - **For Automation**: If you want a "Pay Now" button on the site, use your **Public Key** with the Paystack Inline JS library.
4. **Go Live**: Once verified, toggle the switch from "Test Mode" to "Live Mode" on your Paystack dashboard.

---

## 4. Final Pre-Launch Checklist

- [x] Official Logo (`logo_emblem.png`) is visible in the Header.
- [x] All "Order Bulk" buttons open WhatsApp with the correct message.
- [x] Bank details (Keystone Bank) are 100% accurate for B2B payments.
- [x] Compliance details (RC 1834091) are legally correct.

**You are now ready to dominate the global grains market!** 🌾🚀
