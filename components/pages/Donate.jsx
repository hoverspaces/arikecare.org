export default function Donate() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#fafafa"
    }}>
      <form>
        <script
          src="https://cdn.razorpay.com/static/widget/subscription-button.js"
          data-subscription_button_id="pl_RPoOHHTcmD9UXb"
          data-button_theme="brand-color"
          async
        ></script>
      </form>
    </div>
  );
}
