"use client"

import Link from 'next/link';
import React, { useState } from 'react';

import branchData from '../data/Branches.json';

export default function Page() {
  const [branch, setBranch] = useState("London"); // Default branch is London

  // Function to get the branch details based on the selected branch name
  const getBranchDetails = (branchName) => {
    const selectedBranch = branchData.find((b) => b.name === branchName);
    return selectedBranch || null;
  };

  const selectedBranch = getBranchDetails(branch);

  return (
    <div className='container'>
      <div className='row'>

        <div className='col-4'>
          <div className='card h-100'>
            <div className='card-body'>
              <h2>Contact a branch</h2>

              <p>Contacting your local branch is the best way to find more information. Use the dropdown to get contact details for any of our branches.</p>

              <select
                name="start-loc"
                id="start-loc"
                className="form-select"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              >
                {branchData.map((branch) => (
                  <option key={branch.key} value={branch.name}>
                    {branch.name}
                  </option>
                ))}
              </select>

              {selectedBranch && (
                <div>
                  <p>
                    <i className="bi bi-telephone"></i> {selectedBranch.phone}
                  </p>
                  <p>
                    <i className="bi bi-envelope"></i> {selectedBranch.email}
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>

        <div className='col-4'>
          <div className='card h-100'>
            <div className='card-body'>
              <h2>Customer service</h2>
            </div>
          </div>
        </div>

        <div className='col-4'>
          <div className='card h-100'>
            <div className='card-body'>
              <h2>Frequently Asked Questions (FAQ)</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}