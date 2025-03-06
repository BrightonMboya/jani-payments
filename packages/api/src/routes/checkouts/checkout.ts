// import React, { useEffect, useCallback } from "react";

// // Singleton pattern for checkout initialization
// const initializeCheckout = (() => {
//   let initialized = false;

//   return () => {
//     if (!initialized) {
//       initialized = true;
//       setupEventListeners();
//     }
//   };
// })();

// // Event listener setup
// const setupEventListeners = () => {
//   window.addEventListener("message", (event) => {
//     // Verify origin for security
//     if (event.origin !== "https://checkout.yourdomain.com") return;

//     switch (event.data.type) {
//       case "checkout.success":
//         // Close modal and dispatch success event
//         const modal = document.querySelector("[data-checkout-modal]");
//         if (modal) {
//           document.body.removeChild(modal);
//           window.dispatchEvent(
//             new CustomEvent("checkout.success", {
//               detail: event.data.payload,
//             })
//           );
//         }
//         break;
//       case "checkout.cancelled":
//         // Close modal and dispatch cancel event
//         const cancelModal = document.querySelector("[data-checkout-modal]");
//         if (cancelModal) {
//           document.body.removeChild(cancelModal);
//           window.dispatchEvent(new CustomEvent("checkout.cancelled"));
//         }
//         break;
//     }
//   });
// };

// const CheckoutLink = ({
//   checkoutUrl = "",
//   theme = "light",
//   onSuccess = () => {},
//   onCancel = () => {},
//   className = "",
//   children = "Purchase",
// }) => {
//   const createModal = useCallback(
//     (url: string) => {
//       // Create modal container
//       const modalContainer = document.createElement("div");
//       modalContainer.setAttribute("data-checkout-modal", "");
//       modalContainer.style.position = "fixed";
//       modalContainer.style.top = "0";
//       modalContainer.style.left = "0";
//       modalContainer.style.width = "100%";
//       modalContainer.style.height = "100%";
//       modalContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
//       modalContainer.style.display = "flex";
//       modalContainer.style.justifyContent = "center";
//       modalContainer.style.alignItems = "center";
//       modalContainer.style.zIndex = "9999";

//       // Create modal content
//       const modalContent = document.createElement("div");
//       modalContent.style.backgroundColor = "white";
//       modalContent.style.borderRadius = "8px";
//       modalContent.style.width = "90%";
//       modalContent.style.maxWidth = "500px";
//       modalContent.style.height = "90%";
//       modalContent.style.maxHeight = "700px";
//       modalContent.style.position = "relative";

//       // Create iframe
//       const iframe = document.createElement("iframe");
//       iframe.src = url;
//       iframe.style.width = "100%";
//       iframe.style.height = "100%";
//       iframe.style.border = "none";
//       iframe.style.borderRadius = "8px";

//       modalContent.appendChild(iframe);
//       modalContainer.appendChild(modalContent);
//       document.body.appendChild(modalContainer);

//       // Handle click outside to close
//       modalContainer.addEventListener("click", (e) => {
//         if (e.target === modalContainer) {
//           document.body.removeChild(modalContainer);
//           onCancel();
//         }
//       });

//       // Handle escape key to close
//       const handleEscape = (e: { key: string; }) => {
//         if (e.key === "Escape") {
//           document.body.removeChild(modalContainer);
//           onCancel();
//           document.removeEventListener("keydown", handleEscape);
//         }
//       };
//       document.addEventListener("keydown", handleEscape);
//     },
//     [onCancel]
//   );

//   useEffect(() => {
//     // Initialize checkout
//     initializeCheckout();

//     // Setup success/cancel event listeners
//     // const handleSuccess = (e: CustomEvent) => {
//     //   onSuccess(e.detail);
//     // };

//     window.addEventListener("checkout.success", handleSuccess as EventListener);

//     return () => {
//       window.removeEventListener("checkout.success", handleSuccess as EventListener);
//     };
//   }, [onSuccess]);

//   const handleClick = (e) => {
//     e.preventDefault();
//     createModal(checkoutUrl);
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ${className}`}
//       data-checkout-theme={theme}>
//       {children}
//     </button>
//   );
// };

// export default CheckoutLink;
