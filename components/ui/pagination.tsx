import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

interface PaginationProps extends React.ComponentProps<"nav"> {
	currentPage: number;
	totalPages: number;
	onPageChange: (newPage: number) => void;
}

const Pagination = ({
	currentPage,
	totalPages,
	onPageChange,
	className,
	...props
}: PaginationProps) => {
	// Generate the list of pages to display
	const generatePageNumbers = () => {
		const pageNumbers = [];
		const startPage = Math.max(1, currentPage - 1);
		const endPage = Math.min(totalPages, currentPage + 1);

		for (let i = startPage; i <= endPage; i++) {
			pageNumbers.push(i);
		}
		return pageNumbers;
	};

	const pageNumbers = generatePageNumbers();

	return (
		<nav
			role="navigation"
			aria-label="pagination"
			className={cn("mx-auto flex w-full justify-center", className)}
			{...props}
		>
			<PaginationContent>
				<PaginationPrevious
					onClick={() => onPageChange(Math.max(1, currentPage - 1))}
					/* 					disabled={currentPage === 1}
					 */
				/>
				{pageNumbers.map((page) => (
					<PaginationLink
						key={page}
						isActive={page === currentPage}
						onClick={() => onPageChange(page)}
					>
						{page}
					</PaginationLink>
				))}
				<PaginationNext
					onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
					/* 					disabled={currentPage === totalPages}
					 */
				/>
			</PaginationContent>
		</nav>
	);
};

Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
	HTMLUListElement,
	React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
	<ul
		ref={ref}
		className={cn("flex flex-row items-center gap-1", className)}
		{...props}
	/>
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
	HTMLLIElement,
	React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
	<li ref={ref} className={`cursor-pointer ${cn("", className)}`} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
	isActive?: boolean;
} & Pick<ButtonProps, "size"> &
	React.ComponentProps<"a">;

const PaginationLink = ({
	className,
	isActive,
	size = "icon",
	...props
}: PaginationLinkProps) => (
	<a
		aria-current={isActive ? "page" : undefined}
		className={`cursor-pointer ${cn(
			buttonVariants({
				variant: isActive ? "outline" : "ghost",
				size,
			}),
			className
		)}`}
		{...props}
	/>
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
	className,
	...props
}: React.ComponentProps<typeof PaginationLink>) => (
	<PaginationLink
		aria-label="Go to previous page"
		size="default"
		className={`cursor-pointer ${cn("gap-1 pl-2.5", className)}`}
		{...props}
	>
		<ChevronLeft className="h-4 w-4" />
		<span>Previous</span>
	</PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
	className,
	...props
}: React.ComponentProps<typeof PaginationLink>) => (
	<PaginationLink
		aria-label="Go to next page"
		size="default"
		className={`cursor-pointer ${cn("gap-1 pr-2.5", className)}`}
		{...props}
	>
		<span>Next</span>
		<ChevronRight className="h-4 w-4" />
	</PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
	className,
	...props
}: React.ComponentProps<"span">) => (
	<span
		aria-hidden
		className={cn("flex h-9 w-9 items-center justify-center", className)}
		{...props}
	>
		<MoreHorizontal className="h-4 w-4" />
		<span className="sr-only">More pages</span>
	</span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
};
