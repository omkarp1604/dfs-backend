import Customer from "../models/customerModel.js";

export const create = async (req, res) => {
  try {
    const customerData = new Customer(req.body);
    const { email } = customerData;

    const userExist = await Customer.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }
    const savedCustomer = await customerData.save();
    res.status(200).json(savedCustomer);
  } catch (error) {
    res.status(500).json({ error: "Internal Server error." });
  }
};

export const fetch = async (req, res) => {
  try {
    const customers = await Customer.find();
    if (customers.length === 0) {
      return res.status(404).json({ message: "User Not Found." });
    }
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server error." });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await Customer.findOne({ _id: id });
    if (!userExist) {
      return res.status(404).json({ message: "user not found." });
    }
    const updateCustomer = await Customer.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateCustomer);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error." });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await Customer.findOne({ _id: id });
    if (!userExist) {
      return res.status(404).json({ message: "user not found." });
    }
    await Customer.findByIdAndDelete(id);
    res.status(201).json({ message: "user deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error." });
  }
};
