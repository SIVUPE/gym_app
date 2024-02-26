import { connection as db } from "../config/index.js";

class Products {
    // fetchProducts(req, res) {
    //   const qry = `
    //       SELECT prodID,
    //        prodName,
    //       prodQuantity,
    //       prodAmount,
    //       FROM Products;
    //       `;
    //   db.query(qry, [req.body],(err, results) => {
    //     if (err) throw err;
    //     res.json({
    //       status: res.statusCode,
    //       results,
    //     })
    //   })
    // }
    fetchProducts(req, res) {
        const qry = `
        SELECT prodID, 
        prodName,
        prodQuantity,
        prodAmount,
        FROM Users;
        WHERE prodID = ${req.params.id};
        `;
        db.query(qry, (err, result) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            result,
          });
        });
      }
      addProducts(req, res) {
        const qry = `
        INSERT INTO Products 
        SET ?;
        `
        db.query(qry,(err)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                msg: 'New product was added'
            })
        })
      }
      updateProducts(req, res) {
        const qry = `
        UPDATE Products
        SET ?
        WHERE prodID = ${req.params.id};
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode, 
                msg: "The product information has been updated."
            })
        })
    }
    deleteProducts(req, res) {
        const qry = `
        DELETE FROM Products
        WHERE prodID = ${req.params.id};
        `
        db.query(qry, (err)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode, 
                msg: "The product information has been deleted."
            })
        })
    }
}

export{
    Products
}