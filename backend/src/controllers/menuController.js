import {
	createMenuItem,
	getAllMenuItems,
	getMenuItemById,
	updateMenuItem,
} from "../services/menuService.js";

export const createMenu = async (req, res, next) => {
	try {
		const menuItem = await createMenuItem(req.body);

		return res.status(201).json({
			success: true,
			message: "Menu item created successfully",
			menuItem,
		});
	} catch (error) {
		next(error);
	}
};

export const getMenus = async (req, res, next) => {
	try {
		const menuItems = await getAllMenuItems();

		return res.status(200).json({
			success: true,
			menuItems,
		});
	} catch (error) {
		next(error);
	}
};

export const getMenu = async (req, res, next) => {
	try {
		const menuItem = await getMenuItemById(req.params.id);

		return res.status(200).json({
			success: true,
			menuItem,
		});
	} catch (error) {
		next(error);
	}
};

export const updateMenu = async (req, res, next) => {
	try {
		const menuItem = await updateMenuItem(req.params.id, req.body);

		return res.status(200).json({
			success: true,
			message: "Menu item updated successfully",
			menuItem,
		});
	} catch (error) {
		next(error);
	}
};
