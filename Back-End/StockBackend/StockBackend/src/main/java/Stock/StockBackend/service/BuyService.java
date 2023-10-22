package Stock.StockBackend.service;

import Stock.StockBackend.model.Buy;
import Stock.StockBackend.repository.BuyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BuyService {
    public final BuyRepository buyRepository;

    @Autowired
    public BuyService(BuyRepository buyRepository){
        this.buyRepository = buyRepository;
    }
    public Buy saveBuy(Buy buy){
        return buyRepository.save(buy);
    }
    public List<Buy> getAllBuys(){
        return buyRepository.findAll();
    }
    public Optional<Buy> getBuyNyId(Long id){
        return buyRepository.findById(id);
    }
}
