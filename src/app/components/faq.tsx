import React from 'react';
import { Link } from 'react-router-dom';

const FAQPage: React.FC = () => {
  return (
    <div>
      <div className="bg-white container mx-auto">
        <h1 className="text-3xl font-bold text-black mb-4">Frequently Asked Questions</h1>
        <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl font-serif font-thin text-black mb-2">Question 1</h2>
          <p className="text-xl font-serif font-thin text-black mb-2">How do i reset my password?</p>
        </div>
        <div className="bg-white p-4 shadow rounded mt-4">
          <h2 className="text-xl font-serif font-thin text-black mb-2">Answer 1</h2>
          <p className="text-xl font-serif font-thin text-black mb-2"> To connect your device to Wi-Fi, go to the Settings menu and select Wi-Fi. Toggle the Wi-Fi switch to "On" and wait for the available networks to populate. Tap on the desired network name and enter the password if prompted. Once connected, you will see the Wi-Fi icon in the status bar.</p>
        </div>

        <div className="bg-white p-4 shadow rounded mt-4">
          <h2 className="text-xl font-serif font-thin text-black mb-2">Question 2</h2>
          <p className="text-xl font-serif font-thin text-black mb-2"> How do I update the software on my device?</p>
        </div>
        <div className="bg-white p-4 shadow rounded mt-4">
          <h2 className="text-xl font-serif font-thin text-black mb-2">Answer 2</h2>
          <p className="text-xl font-serif font-thin text-black mb-2">To update the software on your device, go to the Settings menu and look for "Software Update" or "System Update." Tap on it to check for available updates. If an update is available, follow the on-screen prompts to download and install it. Ensure your device is connected to Wi-Fi and has sufficient battery power before initiating the update.</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-serif font-thin text-black mb-2">Question 3</h2>
          <p className="text-xl font-serif font-thin text-black mb-2"> How do I set up email on my device?</p>
        </div>
        <div className="bg-white p-4 shadow rounded mt-4">
          <h2 className="text-xl font-serif font-thin text-black mb-2">Answer 3</h2>
          <p className="text-xl font-serif font-thin text-black mb-2">To set up email on your device, go to the Settings menu and select "Accounts" or "Mail." Tap on "Add Account" and choose your email provider (e.g., Gmail, Outlook, Yahoo). Enter your email address and password, then follow the on-screen instructions to complete the setup. The device will automatically configure the necessary settings based on your email provider.</p>
          </div>
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl font-serif font-thin text-black mb-2">Question 4</h2>
              <p className="text-xl font-serif font-thin text-black mb-2">How do I reset my device to its factory settings?</p>
            </div>
            <div className="bg-white p-4 shadow rounded mt-4">
              <h2 className="text-xl font-serif font-thin text-black mb-2">Answer 4</h2>
              <p className="text-xl font-serif font-thin text-black mb-2"> To reset your device to factory settings, go to the settings menu and look for the "Backup & Reset" or "System" section. Within that section, you should find the option to "Reset" or "Factory Data Reset." Keep in mind that performing a factory reset erases all data on your device, so make sure to back up any important information before proceeding.</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl font-serif font-thin text-black mb-2">Question 5</h2>
              <p className="text-xl font-serif font-thin text-black mb-2"> I'm experiencing frequent app crashes on my device. How can I fix this?</p>
            </div>
            <div className="bg-white p-4 shadow rounded mt-4">
              <h2 className="text-xl font-serif font-thin text-black mb-2">Answer 5</h2>
              <p className="text-xl font-serif font-thin text-black mb-2">If you're encountering frequent app crashes, try the following troubleshooting steps: restart your device, ensure the app is up to date, clear the app cache and data, uninstall and reinstall the app, or try using an alternative app if available. If the issue persists, contact the app developer or customer support for further assistance.</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl font-serif font-thin text-black mb-2">Question 6</h2>
              <p className="text-xl font-serif font-thin text-black mb-2"> My mobile device is not turning on. What should I do?</p>
            </div>
            <div className="bg-white p-4 shadow rounded mt-4">
              <h2 className="text-xl font-serif font-thin text-black mb-2">Answer 6</h2>
              <p className="text-xl font-serif font-thin text-black mb-2"> First, ensure that your device is charged by connecting it to a power source. If it doesn't respond, try a hard reset by pressing and holding the power button and volume down button simultaneously for about 10 seconds. If the problem persists, contact customer support or visit a service center.</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl font-serif font-thin text-black mb-2">Question 7</h2>
              <p className="text-xl font-serif font-thin text-black mb-2">How do I connect my device to Wi-Fi?</p>
            </div>
            <div className="bg-white p-4 shadow rounded mt-4">
              <h2 className="text-xl font-serif font-thin text-black mb-2">Answer 7</h2>
              <p className="text-xl font-serif font-thin text-black mb-2"> To connect your device to Wi-Fi, go to the Settings menu and select Wi-Fi. Toggle the Wi-Fi switch to "On" and wait for the available networks to populate. Tap on the desired network name and enter the password if prompted. Once connected, you will see the Wi-Fi icon in the status bar.</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h2 className="text-xl font-serif font-thin text-black mb-2">Question 8</h2>
              <p className="text-xl font-serif font-thin text-black mb-2"> I'm unable to access the internet on my device. What should I do?</p>
            </div>
            <div className="bg-white p-4 shadow rounded mt-4">
              <h2 className="text-xl font-serif font-thin text-black mb-2">Answer 8</h2>
              <p className="text-xl font-serif font-thin text-black mb-2"> If you're having trouble accessing the internet, first check if your Wi-Fi or mobile data connection is active and properly configured. Try restarting your device and router/modem. If the issue persists, forget the Wi-Fi network on your device and reconnect. For mobile data issues, contact your service provider to ensure your account is active and properly provisioned.</p>
            </div>

        {/* Add more FAQ items as needed */}
        
        <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4">
          Homepage
        </Link>
      </div>
    </div>
  );
};

export default FAQPage;
