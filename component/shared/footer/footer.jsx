import Link from "next/link";

// components/Footer.js
export default function Footer() {
  return (
    <footer>
      <div className="bg-gradient-to-r from-[#021346] to-[#0E6693] text-white p-8 md:p-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:px-6">
          {/* <!-- About Section --> */}
          <div>
            <h2 className="text-xl font-bold mb-4">About My Site</h2>
            <p className="text-sm">
              This is my personal website where I share projects and blogs.
            </p>
          </div>

          {/* <!-- Address Section --> */}
          <div>
            <h2 className="text-xl font-bold mb-4">Address</h2>
            <ul className="space-y-2 text-sm">
              <li>17/A Shanatibagh, Dhaka, Bangladesh</li>
            </ul>
          </div>

          {/* <!-- Links Section --> */}
          <div>
            <h2 className="text-xl font-bold mb-4">Links</h2>
            <ul className="space-y-2 text-sm">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </ul>
          </div>

          {/* <!-- Social Links Section --> */}

          <div>
            <h2 className="text-xl font-bold mb-4">Social Links</h2>
            <ul className="flex space-x-4">
              {/* Facebook */}

              <li className="relative group">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="text-white hover:text-[#0E6693] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54v-2.892h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.892h-2.33V21.88C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </Link>
              </li>

              {/* Instagram */}
              <li className="relative group">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="text-white hover:text-[#0E6693] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.966.24 2.427.403a4.92 4.92 0 0 1 1.792 1.042 4.92 4.92 0 0 1 1.042 1.792c.163.461.35 1.257.403 2.427.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.966-.403 2.427a4.92 4.92 0 0 1-1.042 1.792 4.92 4.92 0 0 1-1.792 1.042c-.461.163-1.257.35-2.427.403-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.966-.24-2.427-.403a4.92 4.92 0 0 1-1.792-1.042 4.92 4.92 0 0 1-1.042-1.792c-.163-.461-.35-1.257-.403-2.427C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.966.403-2.427a4.92 4.92 0 0 1 1.042-1.792 4.92 4.92 0 0 1 1.792-1.042c.461-.163 1.257-.35 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.737 0 8.332.013 7.052.072 5.775.13 4.732.347 3.872.64a7.08 7.08 0 0 0-2.56 1.6A7.08 7.08 0 0 0 .64 4.8c-.293.86-.51 1.903-.568 3.18C.013 8.668 0 9.073 0 12c0 2.927.013 3.332.072 4.612.058 1.277.275 2.32.568 3.18a7.08 7.08 0 0 0 1.6 2.56 7.08 7.08 0 0 0 2.56 1.6c.86.293 1.903.51 3.18.568C8.668 23.987 9.073 24 12 24s3.332-.013 4.612-.072c1.277-.058 2.32-.275 3.18-.568a7.08 7.08 0 0 0 2.56-1.6 7.08 7.08 0 0 0 1.6-2.56c.293-.86.51-1.903.568-3.18C23.987 15.332 24 14.927 24 12s-.013-3.332-.072-4.612c-.058-1.277-.275-2.32-.568-3.18a7.08 7.08 0 0 0-1.6-2.56 7.08 7.08 0 0 0-2.56-1.6c-.86-.293-1.903-.51-3.18-.568C15.332.013 14.927 0 12 0z" />
                    <circle cx="12" cy="12" r="3.5" />
                    <circle cx="18.406" cy="5.594" r="1.44" />
                  </svg>
                </Link>
              </li>

              {/* Twitter */}
              <li className="relative group">
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="text-white hover:text-[#0E6693] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.932 4.932 0 0 0 2.163-2.724c-.951.555-2.005.959-3.127 1.184a4.918 4.918 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149a4.902 4.902 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.903 4.903 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.104c-.396 0-.788-.023-1.175-.069a13.945 13.945 0 0 0 7.557 2.212c9.054 0 14-7.496 14-13.986 0-.21-.004-.423-.014-.634A9.936 9.936 0 0 0 24 4.59z" />
                  </svg>
                </Link>
              </li>

              {/* LinkedIn */}
              <li className="relative group">
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="text-white hover:text-[#0E6693] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.12 2.5-2.5 2.5S0 4.881 0 3.5 1.12 1 2.5 1s2.48 1.119 2.48 2.5zM.02 8h5v16h-5V8zm7.5 0h4.788v2.337h.068c.667-1.263 2.3-2.596 4.732-2.596 5.06 0 6 3.328 6 7.651V24h-5V16.36c0-1.824-.033-4.171-2.542-4.171-2.543 0-2.93 1.986-2.93 4.034V24h-5V8z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-white p-4 text-center">
        <div className="container mx-auto">
          &copy; {new Date().getFullYear()} My NextHub App. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
