package Stock.StockBackend.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "sell")
public class Sell {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "stock_symbol")
    private String stockSymbol;

    @Column(name = "sold_price")
    private double soldPrice;

    @Column(name = "sell_date")
    private Date sellDate;

    @Column(name = "p_l")
    private double Profit_Loss;


    public Sell() {
    }

    public Sell(String stockSymbol, double soldPrice, Date sellDate, double profit_Loss) {
        this.stockSymbol = stockSymbol;
        this.soldPrice = soldPrice;
        this.sellDate = sellDate;
        Profit_Loss = profit_Loss;
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

    public double getSoldPrice() {
        return soldPrice;
    }

    public void setSoldPrice(double soldPrice) {
        this.soldPrice = soldPrice;
    }

    public Date getSellDate() {
        return sellDate;
    }

    public void setSellDate(Date sellDate) {
        this.sellDate = sellDate;
    }

    public double getProfit_Loss() {
        return Profit_Loss;
    }

    public void setProfit_Loss(double profit_Loss) {
        Profit_Loss = profit_Loss;
    }
}
