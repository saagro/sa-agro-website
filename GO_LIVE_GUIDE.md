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

To have a professional identity, follow these exact steps to connect your custom domain to Vercel:

### Step 0: Register Your Domain (Buy it)

Before you can connect the domain, you must own it. Since SA AGRO is a Nigerian company, a `.com.ng` or `.ng` domain is highly recommended for trust.

1. **Recommended Registrars**: Use **Whogohost**, **QServer**, or **Upperlink** (these are the best for `.com.ng`).
2. **Cost**: A `.com.ng` domain usually costs around **₦1,500 – ₦2,500 per year**.
3. **Search**: Look for `saagro.com.ng` or `saagronigltd.com.ng`.

### Step 1: Add Domain to Vercel Dashboard

1. In your **Vercel Dashboard**, click on your project (**sa-agro-website**).
2. Go to **Settings** (top navigation bar) and click **Domains** on the left sidebar.
3. Type your domain name (e.g., `saagro.com.ng`) into the box and click **Add**.
4. Vercel will ask you which version to use. **Recommend choosing the one that includes `www` redirect.**

### Step 2: Configure your Registrar (Whogohost/QServer/etc)

Log in to where you bought your domain and go to the **DNS Management** or **Advanced DNS** section. Add these two records:

| Type | Name | Value / Points To |
| :--- | :--- | :--- |
| **A Record** | @ | `216.198.79.1` |
| **CNAME** | www | `cname.vercel-dns.com` |

> [!TIP]
> If you are using a `.com.ng` domain from a Nigerian registrar (like Whogohost), it might take 1–2 hours for the "Waiting for DNS" message in Vercel to turn green.

### Step 3: Verification

Once the status in Vercel says **"Valid Configuration"** and **"SSL Issued"**, your site is officially live at your professional address!

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
