package Stock.StockBackend.controller;

import Stock.StockBackend.model.Sell;
import Stock.StockBackend.service.SellService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/sell")
public class SellController {
    private final SellService sellService;

    @Autowired
    public SellController(SellService sellService) {
        this.sellService = sellService;
    }

    @PostMapping("/post")
    public Sell sellStock(@RequestBody Sell sell) {
        return sellService.saveSell(sell);
    }

    @GetMapping("/get")
    public List<Sell> getAllSells() {
        return sellService.getAllSells();
    }

    @GetMapping("/get/{id}")
    public Optional<Sell> getSellById(@PathVariable Long id) {
        return sellService.getSellById(id);
    }
}
