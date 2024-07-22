"use client"
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-200 p-4 fixed overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Getting Started</h2>
      <ul>
        <li className="mb-2"><Link href="/getting-started/installation">Installation</Link></li>
        <li className="mb-2"><Link href="/getting-started/project-structure">Project Structure</Link></li>
      </ul>
      <h2 className="text-xl font-bold mt-6 mb-4">Building Your Application</h2>
      <ul>
        <li className="mb-2"><Link href="">Routing</Link></li>
        <li className="mb-2"><Link href="">Data Fetching</Link></li>
        <li className="mb-2"><Link href="">Rendering</Link></li>
        <li className="mb-2"><Link href="">Caching</Link></li>
        <li className="mb-2"><Link href="">Styling</Link></li>
        <li className="mb-2"><Link href="">Optimizing</Link></li>
        <li className="mb-2"><Link href="">Configuring</Link></li>
        <li className="mb-2"><Link href="">Testing</Link></li>
        <li className="mb-2"><Link href="">Authentication</Link></li>
        <li className="mb-2"><Link href="">Deploying</Link></li>
        <li className="mb-2"><Link href="">Upgrading</Link></li>
      </ul>
      <h2 className="text-xl font-bold mt-6 mb-4">API Reference</h2>
      <ul>
        <li className="mb-2"><Link href="/api-reference/components">Components</Link></li>
        <li className="mb-2"><Link href="/api-reference/hooks">Hooks</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
