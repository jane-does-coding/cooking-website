import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";

export function About() {
	return (
		<div className="w-[100vw] h-[100vh] flex items-center justify-center">
			<div className="w-[80vw] flex gap-20 ml-[10vw] items-center">
				<div className="">
					<h1 className="slovensko text-[4rem]">About us</h1>
					<p className="text-[1.25rem] jura">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut omnis
						saepe harum suscipit incidunt illo, corporis quo quidem quasi
						recusandae.
					</p>
					<div className="flex gap-4 my-4">
						<button
							type="submit"
							className="w-full p-3 bg-neutral-800 text-white rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed mt-2"
						>
							Recipes
						</button>
						<button
							type="submit"
							className="w-full p-3 bg-neutral-800/0 border-2 border-neutral-600 text-white rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed mt-2"
						>
							Recipes
						</button>
					</div>
				</div>
				<ResizablePanelGroup
					direction="horizontal"
					className="max-w-[45vw] w-[45vw] rounded-lg border"
				>
					<ResizablePanel defaultSize={50}>
						{/* <div className="flex h-[70vh] items-center justify-center p-6">
					<span className="font-semibold">One</span>
				</div> */}
						<img
							src="/banner1.jpeg"
							className="h-[70vh] w-full object-cover"
							alt=""
						/>
					</ResizablePanel>
					<ResizableHandle />
					<ResizablePanel defaultSize={50}>
						<ResizablePanelGroup direction="vertical">
							<ResizablePanel defaultSize={25}>
								{/* <div className="flex h-full items-center justify-center p-6">
							<span className="font-semibold">Two</span>
						</div> */}
								<img
									src="/banner2.jpeg"
									className="h-full w-full object-cover"
									alt=""
								/>
							</ResizablePanel>
							<ResizableHandle />
							<ResizablePanel defaultSize={75}>
								{/* <div className="flex h-full items-center justify-center p-6">
							<span className="font-semibold">Three</span>
						</div> */}
								<img
									src="/banner3.jpeg"
									className=" h-full w-full object-cover"
									alt=""
								/>
							</ResizablePanel>
						</ResizablePanelGroup>
					</ResizablePanel>
				</ResizablePanelGroup>
			</div>
		</div>
	);
}
