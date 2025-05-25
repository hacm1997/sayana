import { Category } from "@/app/types/product";

type CategoryFilterProps = {
    categories: Category[];
    selectedCategory: string;
    onSelectCategory: (categoryId: string) => void;
};

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
                <button
                    key={category.id}
                    onClick={() => onSelectCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer ${selectedCategory === category.id
                        ? 'bg-[#F2AFB5] text-white'
                        : 'bg-white text-gray-800 hover:bg-gray-100'
                        }`}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;