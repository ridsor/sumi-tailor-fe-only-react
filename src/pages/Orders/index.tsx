import {FaArrowRotateLeft, FaCircleCheck, FaClipboardCheck, FaEllipsisVertical, FaPenToSquare, FaRegTrashCan} from 'react-icons/fa6';
import {FaTimesCircle} from 'react-icons/fa';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import { useEffect, useState } from 'react';
import axios from 'axios';
const backendURL = import.meta.env.VITE_BACKEND_URL;

interface Order {
	full_name: string;
	category: string;
	price: number;
	description: string | null;
	created_at: string;
	updated_at: string;
}

export default () => {
	const [orders, setOrders] = useState<Order[]>([]);

	const handleBtnOrderCancelled = async (id:number) => {
		await axios.delete(backendURL+'/orders/'+id);
		await handleGetAllOrdersAPI();
	};
	
	const handleGetAllOrdersAPI = async () => {
		const backendURL = import.meta.env.VITE_BACKEND_URL;
		const data = await axios.get(backendURL+'/orders').then(res => res.data);
		setOrders(data);
	}

	const handleBtnActionOrder = (e: React.MouseEvent<HTMLButtonElement>) => {
		if(e.currentTarget.nextElementSibling?.classList.contains('active')) {
			e.currentTarget.nextElementSibling?.classList.remove('!pointer-events-auto','!opacity-100','active');
		} else {
			e.currentTarget.nextElementSibling?.classList.add('!pointer-events-auto','!opacity-100','active');
		}
	}

	useEffect(() => {
		// Owl Carousel
		const dots = document.querySelectorAll('.owl-dot');
		dots[0].children[0].innerHTML = 'Diproses';
		dots[0].children[0].setAttribute('tabindex','1');
		dots[1].children[0].innerHTML = 'Selesai';
		dots[1].children[0].setAttribute('tabindex','2');
		dots[2].children[0].innerHTML = 'Riwayat';
		dots[2].children[0].setAttribute('tabindex','3');
	});

	return (
		<>
			<section className="pt-36 pb-16 bg-[#E5E9EC]">
				<div className="container">
					<article className="px-4">
						<div className="bg-white p-4 lg:p-7 shadow-md rounded-xl relative">
							<h2 className="text-2xl font-bold mb-2">Daftar Pesanan</h2>
							<p className="text-gray-500 mb-4">Lihat pesanan Anda disini.</p>
							<OwlCarousel items={1} className="owl-theme" margin={8}>
							<div className="flex flex-col gap-2 w-full pb-24 orders">
								<div className="order  flex border rounded-md shadow-sm flex-wrap">
									<div className="flex flex-col relative items-center px-8 lg:px-10 py-2.5 after:content-[''] after:block after:h-[70%] w-1 after:border-r after:absolute after:-translate-y-1/2 after:top-1/2 after:right-0 order-1 self-center">
										<div className="day font-medium leading-none">Sen</div>
										<div className="tgl font-medium text-3xl leading-none">30</div>
										<div className="time leading-none text-[12px]">14:13</div>
									</div>
									<div className="order-2 flex-1 lg:flex-none">
										<div className="px-3 lg:px-6 py-2.5 flex flex-col justify-center min-h-full md:w-[200px]">
											<div className="name text-[13px] font-medium text-gray-600 mb-1">Firman Kudmas</div>
											<div className="category leading-none text-[13px]">Kategori: Baju</div>
											<div className="price text-[13px] text-gray-600 font-medium">Rp10000</div>
										</div>
									</div>
									<div className="order-4 lg:order-3 py-2.5 text-[13px] self-center lg:flex-1 p-2 lg:p-0 lg:border-t-0 border-t">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ut, rem quod, deserunt provident ipsam expedita velit accusamus natus officia excepturi quasi culpa et eius ratione illo sunt, necessitatibus porro!
									</div>
									<div className="order-3 lg:order-4 text-lg self-center mx-3 lg:mx-6 flex relative">
										<button className="bg-[#F8F8F8] p-3 rounded-md shadow-sm border relative" onClick={handleBtnActionOrder}>
											<FaEllipsisVertical />
										</button>
										<div className="absolute top-[calc(100%+.5rem)] right-0 w-[250px] pointer-events-none opacity-0 transition-all ease-in z-10">
											<ul className='bg-white p-1 gap-1 flex flex-col text-[12px] border rounded-md text-[#172838]'>
												<li>
													<button className='hover:bg-[#F8F8F8] px-2.5 w-full text-left flex items-center gap-x-2'>
														<FaCircleCheck /> 
														Selesai
													</button>
												</li>
												<li>
													<button className='hover:bg-[#F8F8F8] px-2.5 w-full text-left flex items-center gap-x-2'>
														<FaPenToSquare /> 
														Edit
													</button>
												</li>
												<li>
													<button onClick={() => handleBtnOrderCancelled(0)} className='hover:bg-[#F8F8F8] px-2.5 w-full text-left flex items-center gap-x-2'>
														<FaTimesCircle /> 
														Batalkan
													</button>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="order  flex border rounded-md shadow-sm flex-wrap">
									<div className="flex flex-col relative items-center px-8 lg:px-10 py-2.5 after:content-[''] after:block after:h-[70%] w-1 after:border-r after:absolute after:-translate-y-1/2 after:top-1/2 after:right-0 order-1 self-center">
										<div className="day font-medium leading-none">Sen</div>
										<div className="tgl font-medium text-3xl leading-none">30</div>
										<div className="time leading-none text-[12px]">14:13</div>
									</div>
									<div className="order-2 flex-1 lg:flex-none">
										<div className="px-3 lg:px-6 py-2.5 flex flex-col justify-center min-h-full md:w-[200px]">
											<div className="name text-[13px] font-medium text-gray-600 mb-1">Firman Kudmas</div>
											<div className="category leading-none text-[13px]">Kategori: Baju</div>
											<div className="price text-[13px] text-gray-600 font-medium">Rp10000</div>
										</div>
									</div>
									<div className="order-4 lg:order-3 py-2.5 text-[13px] self-center lg:flex-1 p-2 lg:p-0 lg:border-t-0 border-t">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ut, rem quod, deserunt provident ipsam expedita velit accusamus natus officia excepturi quasi culpa et eius ratione illo sunt, necessitatibus porro!
									</div>
									<div className="order-3 lg:order-4 text-lg self-center mx-3 lg:mx-6 flex relative">
										<button className="bg-[#F8F8F8] p-3 rounded-md shadow-sm border relative" onClick={handleBtnActionOrder}>
											<FaEllipsisVertical />
										</button>
										<div className="absolute top-[calc(100%+.5rem)] right-0 w-[250px] pointer-events-none opacity-0 transition-all ease-in z-10">
											<ul className='bg-white p-1 gap-1 flex flex-col text-[12px] border rounded-md text-[#172838]'>
												<li>
													<button className='hover:bg-[#F8F8F8] px-2.5 w-full text-left flex items-center gap-x-2'>
														<FaCircleCheck /> 
														Selesai
													</button>
												</li>
												<li>
													<button className='hover:bg-[#F8F8F8] px-2.5 w-full text-left flex items-center gap-x-2'>
														<FaPenToSquare /> 
														Edit
													</button>
												</li>
												<li>
													<button className='hover:bg-[#F8F8F8] px-2.5 w-full text-left flex items-center gap-x-2'>
														<FaTimesCircle /> 
														Batalkan
													</button>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="orders flex flex-col gap-2 w-full">
								<div className="order  flex border rounded-md shadow-sm flex-wrap">
									<div className="flex flex-col relative items-center px-8 lg:px-10 py-2.5 after:content-[''] after:block after:h-[70%] w-1 after:border-r after:absolute after:-translate-y-1/2 after:top-1/2 after:right-0 order-1 self-center">
										<div className="day font-medium leading-none">Sen</div>
										<div className="tgl font-medium text-3xl leading-none">30</div>
										<div className="time leading-none text-[12px]">14:13</div>
									</div>
									<div className="order-2 flex-1 lg:flex-none">
										<div className="px-3 lg:px-6 py-2.5 flex flex-col justify-center min-h-full md:w-[200px]">
											<div className="name text-[13px] font-medium text-gray-600 mb-1">Firman Kudmas</div>
											<div className="category leading-none text-[13px]">Kategori: Baju</div>
											<div className="price text-[13px] text-gray-600 font-medium">Rp10000</div>
										</div>
									</div>
									<div className="order-4 lg:order-3 py-2.5 text-[13px] self-center lg:flex-1 p-2 lg:p-0 lg:border-t-0 border-t">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ut, rem quod, deserunt provident ipsam expedita velit accusamus natus officia excepturi quasi culpa et eius ratione illo sunt, necessitatibus porro!
									</div>
									<div className="order-3 lg:order-4 text-lg self-center mx-3 lg:mx-6 flex relative">
										<button className="bg-[#F8F8F8] p-3 rounded-md shadow-sm border relative" onClick={handleBtnActionOrder}>
											<FaEllipsisVertical />
										</button>
										<div className="absolute top-[calc(100%+.5rem)] right-0 w-[250px] pointer-events-none opacity-0 transition-all ease-in z-10">
											<ul className='bg-white p-1 gap-1 flex flex-col text-[12px] border rounded-md text-[#172838]'>
												<li>
													<button className='hover:bg-[#F8F8F8] px-2.5 w-full text-left flex items-center gap-x-2'>
														<FaClipboardCheck /> 
														Diterima
													</button>
												</li>
												<li>
													<button className='hover:bg-[#F8F8F8] px-2.5 w-full text-left flex items-center gap-x-2'>
														<FaArrowRotateLeft /> 
														Belum Selesai
													</button>
												</li>
												<li>
													<button className='hover:bg-[#F8F8F8] px-2.5 w-full text-left flex items-center gap-x-2'>
														<FaPenToSquare /> 
														Edit
													</button>
												</li>
												<li>
													<button className='hover:bg-[#F8F8F8] px-2.5 w-full text-left flex items-center gap-x-2'>
														<FaTimesCircle /> 
														Batalkan
													</button>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="orders grid [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))] lg:[grid-template-columns:repeat(auto-fill,minmax(400px,1fr))] gap-2 w-full">
								<div className="order flex border rounded-md shadow-sm flex-wrap">
									<div className="flex flex-col relative items-center px-8 lg:px-10 py-2.5 after:content-[''] after:block after:h-[70%] w-1 after:border-r after:absolute after:-translate-y-1/2 after:top-1/2 after:right-0 order-1 self-center">
										<div className="day font-medium leading-none">Sen</div>
										<div className="tgl font-medium text-3xl leading-none">30</div>
										<div className="time leading-none text-[12px]">14:13</div>
									</div>
									<div className="order-2 flex-1 lg:flex-none">
										<div className="px-3 lg:px-6 py-2.5 flex flex-col justify-center min-h-full md:w-[200px]">
											<div className="name text-[13px] font-medium text-gray-600 mb-1">Firman Kudmas</div>
											<div className="category leading-none text-[13px]">Kategori: Baju</div>
											<div className="price text-[13px] text-gray-600 font-medium">Rp10000</div>
										</div>
									</div>
									<div className="order-4 lg:order-3 py-2.5 text-[13px] self-center lg:flex-1 p-2 lg:p-0 w-full border-t lg:border-t-0">
										<div className="status font-bold">Pesanan telah Diterima!</div>
									</div>
									<div className="order-3 lg:order-4 text-lg self-center mx-3 lg:mx-6 flex relative">
										<button className="bg-[#F8F8F8] p-3 rounded-md shadow-sm border relative" onClick={handleBtnActionOrder}>
											<FaEllipsisVertical />
										</button>
										<div className="absolute top-[calc(100%+.5rem)] right-0 w-[250px] pointer-events-none opacity-0 transition-all ease-in z-10">
											<ul className='bg-white p-1 gap-1 flex flex-col text-[12px] border rounded-md text-[#172838]'>
												<li>
													<button className='hover:bg-[#F8F8F8] px-2.5 w-full text-left flex items-center gap-x-2'>
														<FaPenToSquare /> 
														Edit
													</button>
												</li>
												<li>
													<button className='hover:bg-[#F8F8F8] px-2.5 w-full text-left flex items-center gap-x-2'>
														<FaRegTrashCan /> 
														Hapus
													</button>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="order flex border rounded-md shadow-sm flex-wrap">
									<div className="flex flex-col relative items-center px-8 lg:px-10 py-2.5 after:content-[''] after:block after:h-[70%] w-1 after:border-r after:absolute after:-translate-y-1/2 after:top-1/2 after:right-0 order-1 self-center">
										<div className="day font-medium leading-none">Sen</div>
										<div className="tgl font-medium text-3xl leading-none">30</div>
										<div className="time leading-none text-[12px]">14:13</div>
									</div>
									<div className="order-2 flex-1 lg:flex-none">
										<div className="px-3 lg:px-6 py-2.5 flex flex-col justify-center min-h-full md:w-[200px]">
											<div className="name text-[13px] font-medium text-gray-600 mb-1">Firman Kudmas</div>
											<div className="category leading-none text-[13px]">Kategori: Baju</div>
											<div className="price text-[13px] text-gray-600 font-medium">Rp10000</div>
										</div>
									</div>
									<div className="order-4 lg:order-3 py-2.5 text-[13px] self-center lg:flex-1 p-2 lg:p-0 w-full border-t lg:border-t-0">
										<div className="status font-bold">Pesanan telah Diterima!</div>
									</div>
									<div className="order-3 lg:order-4 text-lg self-center mx-3 lg:mx-6 flex relative">
										<button className="bg-[#F8F8F8] p-3 rounded-md shadow-sm border relative" onClick={handleBtnActionOrder}>
											<FaEllipsisVertical />
										</button>
										<div className="absolute top-[calc(100%+.5rem)] right-0 w-[250px] pointer-events-none opacity-0 transition-all ease-in z-10">
											<ul className='bg-white p-1 gap-1 flex flex-col text-[12px] border rounded-md text-[#172838]'>
												<li>
													<button className='hover:bg-[#F8F8F8] px-2.5 w-full text-left flex items-center gap-x-2'>
														<FaPenToSquare /> 
														Edit
													</button>
												</li>
												<li>
													<button className='hover:bg-[#F8F8F8] px-2.5 w-full text-left flex items-center gap-x-2'>
														<FaRegTrashCan /> 
														Hapus
													</button>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							</OwlCarousel>
						</div>
					</article>
				</div>
			</section>
		</>
	);
}