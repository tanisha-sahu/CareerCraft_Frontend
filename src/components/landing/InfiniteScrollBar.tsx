
const InfiniteScrollBar = () => {
  return (
    <div className="w-full overflow-hidden bg-[#A5AAB3] relative">
      {/* Close button */}

      {/* Scrolling Content */}
      <div className="flex items-center space-x-8 py-2 whitespace-nowrap" style={marqueeStyle}>
        {Array(10).fill("").map((_, index) => (
          <div key={index} className="flex items-center space-x-2 text-black font-semibold">
            <span className="text-sm">⚡ Get 30% OFF on All Qode Plugins</span>
            <span className="text-sm">·</span>
            <span className="text-sm">Discount code: WOOCOMMERCE30</span>
            <span className="text-sm">·</span>
            <span className="text-sm">SPECIAL OFFER</span>
            <span className="text-sm">·</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const marqueeStyle = {
  display: "inline-flex",
  minWidth: "100%",
  animation: "scrollLeft 30s linear infinite",
};



// Inject the global CSS
// const style = document.createElement("style");
// style.innerHTML = globalStyle;
// document.head.appendChild(style);

export default InfiniteScrollBar;