package Stock.StockBackend.service;

import Stock.StockBackend.model.Buy;
import Stock.StockBackend.model.Sell;
import Stock.StockBackend.repository.BuyRepository;
import Stock.StockBackend.repository.SellRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SellService {
    private final SellRepository sellRepository;
    private final BuyRepository buyRepository;

    @Autowired
    public SellService(SellRepository sellRepository, BuyRepository buyRepository) {
        this.sellRepository = sellRepository;
        this.buyRepository = buyRepository;
    }

    public Sell saveSell(Sell sell) {
        Optional<Buy> buyEntry = buyRepository.findByStockSymbol(sell.getStockSymbol());
        if(buyEntry.isPresent()){
            double boughtPrice = buyEntry.get().getBoughtPrice();
            double soldPrice = sell.getSoldPrice();
            sell.setProfit_Loss(soldPrice-boughtPrice);
        }
        return  sellRepository.save(sell);
    }

    public List<Sell> getAllSells() {
        return sellRepository.findAll();
    }

    public Optional<Sell> getSellById(Long id) {
        return sellRepository.findById(id);
    }
}
