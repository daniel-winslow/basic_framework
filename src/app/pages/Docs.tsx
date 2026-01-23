import { Navbar } from '@/app/components';

const Docs = () => {
    return (
        <>
            <Navbar currentPage="docs" borderBottom={true} />
            <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">You just got meatballed</h1>
                <img src="https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/meatballed.jpg" alt="Meatballed" className="rounded-lg shadow-lg" />
            </div>
        </>
    )
}

export default Docs;