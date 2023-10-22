package Stock.StockBackend.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "buy")
public class Buy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "stock_symbol")
    private String stockSymbol;

    @Column(name = "bought_price")
    private double boughtPrice;

    @Column(name = "buy_date")
    private Date buyDate;


    public Buy() {
    }

    public Buy(String stockSymbol, double boughtPrice, Date buyDate) {
        this.stockSymbol = stockSymbol;
        this.boughtPrice = boughtPrice;
        this.buyDate = buyDate;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStockSymbol() {
        return stockSymbol;
    }

    public void setStockSymbol(String stockSymbol) {
        this.stockSymbol = stockSymbol;
    }

    public double getBoughtPrice() {
        return boughtPrice;
    }

    public void setBoughtPrice(double boughtPrice) {
        this.boughtPrice = boughtPrice;
    }

    public Date getBuyDate() {
        return buyDate;
    }

    public void setBuyDate(Date buyDate) {
        this.buyDate = buyDate;
    }
}
