abstract class baseCtrl {
  abstract model: any;

  getAll = async (req, res) => {
    try {
      let docs = await this.model.find({});
      res.status(200).json(docs);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };
}

export default baseCtrl;
