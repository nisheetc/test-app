import { cn } from '@/utils';

export default function LogoType({ className }: { className?: string }) {
  return (
    <svg
      className={cn('h-8 w-24', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3303 511"
    >
      <g clip-path="url(#logo-path-a)">
        <path
          d="M885.241 446.349c-6.404 4.394-16.009 9.786-28.815 16.174-12.405 5.989-27.21 11.175-44.414 15.559-16.804 4.385-35.406 6.368-55.805 5.949-34-.431-64.594-6.459-91.784-18.084-26.789-11.624-49.575-27.445-68.356-47.462-18.782-20.417-33.361-43.631-43.737-69.64-9.976-26.409-14.95-54.414-14.923-84.014.03-32.8 5.257-62.795 15.682-89.986 10.426-27.59 25.248-51.576 44.466-71.959 19.619-20.382 42.433-36.161 68.443-47.337 26.411-11.176 55.216-16.75 86.416-16.721 26.8.024 50.996 3.646 72.59 10.866 21.593 7.22 39.786 15.636 54.577 25.25l-25.255 59.977c-11.593-8.011-25.986-15.624-43.179-22.84-16.793-7.615-35.59-11.432-56.39-11.451-20.4-.019-39.804 4.163-58.211 12.547-18.008 7.983-34.018 19.368-48.031 34.156-13.614 14.387-24.429 31.377-32.447 50.97-8.018 19.193-12.037 40.189-12.058 62.989-.021 23.2 3.56 44.603 10.742 64.21 7.182 19.606 17.366 36.616 30.553 51.028 13.587 14.412 29.777 25.627 48.569 33.644 18.793 8.017 39.989 12.037 63.589 12.058 22.4.021 42.003-3.361 58.81-10.146 17.206-6.784 31.213-14.571 42.021-23.361l26.947 57.624Zm101.787-218.307 5.935 72.006-2.992-9.603c6.814-15.194 16.429-28.185 28.839-38.974 12.41-10.788 25.21-18.977 38.42-24.565 13.6-5.987 25.01-8.977 34.21-8.968l-3.06 61.197c-19.2-1.218-36 2.367-50.41 10.754-14.01 8.387-25.02 19.577-33.03 33.57-8.012 13.992-12.025 28.989-12.04 44.989l-.101 111-61.2-.056.229-251.4 55.2.05Zm245.902 257.625c-29.2-.027-54.19-5.649-74.98-16.868-20.79-11.619-36.78-27.434-47.96-47.444-11.18-20.41-16.76-43.616-16.73-69.616.02-24.8 6.24-47.194 18.66-67.183 12.82-20.388 29.83-36.572 51.04-48.553 21.61-11.98 45.42-17.958 71.42-17.935 33.6.031 61.39 9.857 83.37 29.477 22.38 19.62 37.36 47.034 44.93 82.241l-204.67 70.613-14.37-36.014 163.86-58.65-12.61 7.789c-4.79-12.405-12.38-23.212-22.77-32.421-10.39-9.61-24.59-14.423-42.59-14.439-14.4-.013-27.4 3.575-39.01 10.764-11.2 6.79-20.21 16.382-27.02 28.776-6.41 11.994-9.63 26.191-9.64 42.591-.02 16.8 3.37 31.603 10.16 44.409 7.19 12.407 16.78 22.215 28.77 29.426 12.39 7.212 26.19 10.824 41.39 10.838 10.8.01 21-1.98 30.61-5.972 10-3.991 19.4-8.982 28.21-14.974l28.16 45.626c-13.21 8.388-27.62 15.175-43.22 20.36-15.2 4.786-30.21 7.173-45.01 7.159Zm267.21.244c-23.6-.021-45-4.841-64.19-14.458-19.19-10.018-34.37-24.832-45.56-44.442-11.18-19.61-16.76-43.815-16.73-72.615.03-28.4 5.85-52.795 17.47-73.184 12.02-20.389 27.63-35.975 46.84-46.757 19.61-11.183 40.81-16.763 63.61-16.742 24 .022 43.6 5.24 58.79 15.653 15.59 10.015 27.78 21.826 36.57 35.434l-4.21 9.596 6.05-49.794 56.99.052-.22 251.4-61.8-.057.05-63 6.59 15.006c-1.6 3.199-5.01 7.796-10.21 13.791-5.21 5.595-12.21 11.589-21.02 17.981-8.41 6.392-18.41 11.783-30.01 16.172-11.21 3.99-24.21 5.978-39.01 5.964Zm16.85-50.384c13.2.012 25-2.377 35.4-7.168 10.41-4.79 19.21-11.582 26.42-20.376 7.21-8.793 12.22-19.188 15.03-31.186l.05-52.2c-3.19-11.203-8.58-20.808-16.18-28.815-7.59-8.407-16.78-15.015-27.58-19.825-10.39-4.809-21.99-7.22-34.79-7.232-14.4-.013-27.6 3.575-39.61 10.764-12.01 6.789-21.62 16.38-28.83 28.774-7.21 12.393-10.82 26.79-10.84 43.19-.01 15.6 3.58 29.803 10.76 42.61 7.59 12.807 17.58 23.016 29.98 30.627 12.39 7.211 25.79 10.824 40.19 10.837Zm221.56-317.198 61.8.057-.1 111 67.2.061-.04 48.6-67.2-.061-.19 202.2-61.8-.057.19-202.2-44.4-.04.04-48.6 44.4.04.1-111Zm277.59 368.054c-29.2-.026-54.19-5.649-74.98-16.868-20.79-11.619-36.78-27.434-47.96-47.444-11.18-20.41-16.76-43.615-16.73-69.615.02-24.8 6.24-47.195 18.66-67.183 12.82-20.389 29.83-36.573 51.04-48.554 21.61-11.98 45.42-17.958 71.42-17.935 33.6.031 61.39 9.857 83.37 29.477 22.38 19.62 37.36 47.034 44.93 82.241l-204.67 70.613-14.36-36.013 163.85-58.651-12.61 7.789c-4.79-12.405-12.38-23.211-22.77-32.421-10.39-9.609-24.59-14.422-42.59-14.439-14.4-.013-27.4 3.575-39.01 10.764-11.2 6.79-20.21 16.382-27.02 28.776-6.41 11.994-9.63 26.191-9.64 42.591-.02 16.8 3.37 31.603 10.16 44.409 7.19 12.407 16.78 22.216 28.77 29.427 12.4 7.211 26.19 10.823 41.39 10.837 10.8.01 21-1.98 30.61-5.972 10-3.99 19.41-8.982 28.21-14.974l28.16 45.626c-13.21 8.388-27.61 15.175-43.22 20.36-15.2 4.787-30.21 7.173-45.01 7.159ZM2308.35 45.05c44 .04 78.6 9.072 103.78 27.095 25.58 18.023 38.36 45.635 38.32 82.835-.02 24-5.64 44.595-16.85 61.785-10.82 17.19-26.03 30.576-45.64 40.158-19.21 9.183-42.01 14.362-68.41 15.538l-9.57-34.209c30.8.828 58.19 6.253 82.18 16.275 24.39 9.622 43.58 23.24 57.57 40.853 14.38 17.213 21.56 37.819 21.54 61.819-.02 22-4.24 40.996-12.65 56.989-8.02 15.592-19.03 28.382-33.04 38.37-13.61 9.587-29.21 16.773-46.82 21.557-17.2 4.384-35.2 6.568-54 6.55l-132.6-.121.39-435.6 115.8.106Zm11.23 188.411c22.4.02 38.81-6.365 49.22-19.155 10.41-12.791 15.62-27.986 15.64-45.586.02-21.6-6.76-37.206-20.36-46.819-13.19-10.012-30.78-15.028-52.78-15.048l-54.6-.05-.12 126.6 63 .058Zm2.23 187.802c15.6.014 29.6-2.173 42.01-6.562 12.8-4.788 22.81-11.779 30.02-20.972 7.6-9.593 11.42-21.59 11.43-35.99.01-16-4.38-28.404-13.17-37.212-8.39-9.208-19.38-15.618-32.98-19.23-13.2-4.012-26.99-6.025-41.39-6.038l-61.2-.056-.12 126 65.4.06Zm299.95 65.674c-23.6-.022-44.99-4.841-64.18-14.459-19.19-10.017-34.38-24.831-45.56-44.441-11.18-19.611-16.76-43.816-16.74-72.616.03-28.4 5.85-52.794 17.47-73.184 12.02-20.389 27.63-35.975 46.84-46.757 19.61-11.182 40.82-16.763 63.62-16.742 24 .022 43.59 5.24 58.79 15.654 15.59 10.014 27.78 21.825 36.56 35.433l-4.21 9.597 6.05-49.795 57 .052-.23 251.4-61.8-.056.06-63 6.58 15.006c-1.6 3.198-5 7.795-10.21 13.79-5.2 5.596-12.21 11.589-21.02 17.981-8.4 6.392-18.41 11.783-30.01 16.173-11.2 3.989-24.21 5.978-39.01 5.964Zm16.85-50.385c13.2.012 25-2.377 35.41-7.167 10.4-4.791 19.21-11.583 26.42-20.376 7.2-8.794 12.21-19.189 15.02-31.186l.05-52.2c-3.19-11.203-8.58-20.808-16.17-28.815-7.59-8.407-16.79-15.016-27.58-19.825-10.4-4.81-22-7.221-34.8-7.232-14.4-.013-27.6 3.575-39.61 10.764-12 6.789-21.61 16.38-28.82 28.773-7.21 12.394-10.83 26.79-10.84 43.19-.02 15.6 3.57 29.804 10.76 42.61 7.59 12.807 17.58 23.016 29.97 30.628 12.39 7.211 25.79 10.823 40.19 10.836Zm270.43 50.048c-18.4-.017-36.19-3.233-53.39-9.649-17.19-6.816-31.38-16.629-42.57-29.439l26.43-34.776c10.79 10.01 21.58 17.62 32.38 22.83 11.2 4.81 21.79 7.22 31.79 7.229 8 .007 15.2-.786 21.61-2.381 6.4-1.994 11.6-5.189 15.6-9.585 4.01-4.397 6.01-10.195 6.02-17.395.01-8.4-2.79-15.002-8.38-19.807-5.6-4.806-12.79-8.812-21.59-12.02s-18.2-6.217-28.19-9.026c-21.2-6.819-37.19-16.434-47.98-28.844-10.78-12.81-16.17-27.815-16.16-45.015.02-13.2 3.23-25.597 9.64-37.191 6.81-11.994 17.02-21.784 30.63-29.372 13.6-7.587 30.41-11.372 50.41-11.354 18.4.017 34.59 2.232 48.59 6.645 14 4.012 26.99 11.024 38.98 21.035l-24.03 37.178c-7.2-7.206-15.79-12.614-25.79-16.223-9.59-4.009-18.39-6.217-26.39-6.624-7.2-.007-13.8 1.187-19.81 3.582-6 1.994-10.8 5.19-14.4 9.586-3.61 3.997-5.41 8.795-5.42 14.395-.41 8 2.19 14.602 7.78 19.808 6 4.805 13.6 8.812 22.79 12.02 9.2 2.809 18.2 5.817 26.99 9.025 12.4 3.611 23.4 8.621 32.99 15.03 9.6 6.009 17.19 13.416 22.78 22.221s8.38 20.008 8.37 33.608c-.01 14.8-3.63 28.796-10.84 41.99-7.21 12.793-18.22 23.183-33.03 31.17-14.8 7.586-33.41 11.369-55.81 11.349Zm258.03.836c-29.2-.027-54.2-5.65-74.99-16.869-20.79-11.619-36.77-27.434-47.96-47.444-11.18-20.41-16.76-43.615-16.73-69.615.02-24.8 6.24-47.195 18.66-67.183 12.82-20.388 29.83-36.573 51.04-48.554 21.61-11.98 45.42-17.958 71.42-17.934 33.6.03 61.39 9.856 83.37 29.476 22.39 19.62 37.36 47.034 44.93 82.241l-204.67 70.613-14.36-36.013 163.85-58.65-12.61 7.788c-4.79-12.404-12.38-23.211-22.77-32.421-10.39-9.609-24.58-14.422-42.58-14.439-14.4-.013-27.41 3.575-39.01 10.765-11.21 6.789-20.22 16.381-27.03 28.775-6.41 11.994-9.62 26.191-9.64 42.591-.01 16.8 3.37 31.603 10.16 44.41 7.19 12.406 16.78 22.215 28.77 29.426 12.4 7.211 26.19 10.824 41.39 10.838 10.8.01 21.01-1.981 30.61-5.972 10-3.991 19.41-8.983 28.21-14.975l28.16 45.626c-13.21 8.388-27.61 15.175-43.22 20.361-15.2 4.786-30.2 7.172-45 7.159Z"
          fill="currentColor"
        />
        <g
          clip-path="url(#logo-path-b)"
          className="dark:text-foreground text-foreground/30"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="m2 336 241 128 238-128-239.5-65L2 336Zm103 0 136.5-41.5 134.5 41-135 61L105 336Z"
            fill="currentColor"
          />
          <path
            d="M2 379.5V336l240.5 128L481 336v37L242.5 509.5 2 379.5Z"
            fill="black"
          />
          <path
            d="M242.5 509.5 2 379.5V336l240.5 128m0 45.5V464m0 45.5L481 373v-37L242.5 464"
            stroke="black"
          />
          <path
            d="M366 137c-105.162 11.239-113.681 19.918-125 125-11.239-105.162-19.918-113.761-125-125 105.162-11.239 113.761-19.838 125-125 11.225 105.162 19.838 113.775 125 125Z"
            fill="currentColor"
          />
        </g>
      </g>
      <defs>
        <clipPath id="logo-path-a">
          <path fill="#fff" d="M0 0h3303v511H0z" />
        </clipPath>
        <clipPath id="logo-path-b">
          <path fill="#fff" d="M0 13h482v498H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
