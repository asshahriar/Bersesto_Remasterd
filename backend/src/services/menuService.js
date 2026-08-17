import Menu from "../models/Menu.js";

export const createMenuItem = async (data) => {
	const menuItem = await Menu.create(data);

	return menuItem;
};

export const getAllMenuItems = async () => {
	const menuItems = await Menu.find().sort({ createdAt: -1 });

	return menuItems;
};

export const getMenuItemById = async (id) => {
	const menuItem = await Menu.findById(id);

	if (!menuItem) {
		const error = new Error("Menu item not found");
		error.statusCode = 404;

		throw error;
	}

	return menuItem;
};

export const updateMenuItem = async (id, data) => {
	const menuItem = await Menu.findByIdAndUpdate(id, data, {
		new: true,
		runValidators: true,
	});

	if (!menuItem) {
		const error = new Error("Menu item not found");
		error.statusCode = 404;

		throw error;
	}

	return menuItem;
};