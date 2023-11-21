import branchData from '../data/Branches.json';
import BranchCard from '../components/BranchCard';

export default function Page() {
    return (
        <div className='container'>
            <h1>Our branches</h1>

            <div className='row'>
                {branchData.map((branch) => (
                    <div className='col-md-6 mb-3'>
                        <BranchCard key={branch.key} branch={branch} />
                    </div>
                ))}
            </div>
        </div>

    )
}